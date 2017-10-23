/**
 * @copyright 2017-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

import path from 'path';
import isObject from 'isobject';
import parser from 'mri';
import { hela, exec, shell } from './index.mjs';

const options = {
  cwd: process.cwd(),
  hela,
  helaExec: exec,
  helaShell: shell,
};

options.parse = (opts) => parser(process.argv.slice(2), opts);
options.argv = options.parse();

const [taskName] = options.argv._;
options.taskName = taskName;

if (!options.argv._.length) {
  console.log('Usage: hela <taskName>');
  process.exit(1);
}

const interop = (ex) => (isObject(ex) && 'default' in ex ? ex.default : ex);

const onerror = (er) => {
  // Don't show stack/message
  // if it is `nyc check-coverage` command,
  // because it is already show that threshold is not meet
  const isNyc = er.message.indexOf('nyc') > 0;
  const isCov = er.message.indexOf('check-coverage') > 0;
  if (!isNyc && !isCov) {
    console.error('ERR!', er.stack || er.message);
    throw er;
  }
};

import(path.join(options.cwd, 'package.json'))
  .then((pkg) => {
    options.pkg = interop(pkg);
    return hela(options);
  })
  .then((tasks) => {
    if (Object.keys(tasks).length === 0) {
      throw new Error('hela: no tasks');
    }
    const hasOwn = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
    if (!hasOwn(tasks, options.taskName)) {
      throw new Error(`hela: no such task -> ${options.taskName}`);
    }
    return tasks[options.taskName]();
  })
  .then(() => process.exit(0))
  .catch(onerror)
  .catch(() => process.exit(1));