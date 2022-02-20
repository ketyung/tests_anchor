import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Tests } from '../target/types/tests';
import {testInit} from './funcs';

describe('tests', () => {

    // Configure the client to use the local cluster.
    let provider = anchor.Provider.env();
    anchor.setProvider(provider);

    const program = anchor.workspace.Tests as Program<Tests>;

    let signer = anchor.web3.Keypair.generate();

    testInit(signer,provider, program);

});
