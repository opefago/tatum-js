/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeployErc20OffchainMnemXpub } from './DeployErc20OffchainMnemXpub';

export type DeployCeloErc20OffchainMnemXpub = (DeployErc20OffchainMnemXpub & {
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: 'CELO' | 'CUSD' | 'CEUR';
});
