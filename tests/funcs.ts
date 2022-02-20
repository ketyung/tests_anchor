import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Tests } from '../target/types/tests';


export async function testInit (
    my_seed : string, 
    provider : anchor.Provider,  program : Program<Tests>,) {


    it('Init Test...!', async () => {


        const [_seed, _bump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode(my_seed))], program.programId);

        console.log("_seed::",_seed.toBase58());

        
        const tx = await program.rpc.initMyData(_bump, my_seed, {

            accounts : {

                myDataAccount : _seed,
                payer : provider.wallet.publicKey,
                systemProgram : anchor.web3.SystemProgram.programId,

            },
        });

        console.log("tx signature::", tx);

        printMyData(program, _seed);

    });

}

export async function testUpdate (
    my_seed : string, 
    provider : anchor.Provider,  program : Program<Tests>,) {


    it('Update Test...!', async () => {


        const [_seed, _bump] = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(anchor.utils.bytes.utf8.encode(my_seed))], program.programId);

      
        
        const tx = await program.rpc.updateMyData({

            accounts : {

                myDataAccount : _seed,
                systemProgram : anchor.web3.SystemProgram.programId,

            },
        });

        console.log("tx signature::", tx);

        printMyData(program, _seed);

    });

}


async function printMyData (  program : Program<Tests>,
    accKey : anchor.web3.PublicKey ){

    let acc = await program.account.myData.fetch(accKey);

    console.log("Info of ", accKey.toBase58());
    console.log("count:: ", acc.count);
    console.log("message:: ", acc.message);
    
}