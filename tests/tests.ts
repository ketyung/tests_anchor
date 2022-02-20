import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Tests } from '../target/types/tests';
import {testInit,testUpdate} from './funcs';

describe('tests', () => {

    // Configure the client to use the local cluster.
    let provider = anchor.Provider.env();
    anchor.setProvider(provider);

    const program = anchor.workspace.Tests as Program<Tests>;

    let my_seed = "my_seed_001";
    
    testInit(my_seed,provider, program);

    testUpdate(my_seed, provider, program);
});
