#!/usr/bin/env node
// Copyright 2017-2019 @polkadot/dev authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const chalk = require('chalk');

if (process.env.npm_execpath.indexOf('yarn') === -1) {
  const blank = ''.padStart(75);

  console.error(
    chalk.white.bold.bgRed(
      `${blank}\n   ${chalk.bold('FATAL: The use of yarn is required, install via npm is not supported.')}   \n${blank}`
    )
  );
  console.error(`\n   Technical explanation: All the projects in the ${chalk.bold('@plugnet')} family use \n   yarn workspaces, along with hoisting of dependencies. Currently only\n   yarn supports package.json workspaces, hence the limitation.\n\n\n   If yarn is not available, you can get it from https://yarnpkg.com/\n\n\n`);

  process.exit(1);
}

process.exit(0);
