pub mod ins;
pub mod state;

use anchor_lang::prelude::*;
use ins::*;


declare_id!("923LYuSP758SwL3yvWZsKYYGG1BBcJeJ2HL4ZvaY7u5M");

#[program]
pub mod tests {
    use super::*;

    pub fn init_my_data(_ctx: Context<InitData>, _bump : u8, _seed : String) -> ProgramResult {
        
        _ctx.accounts.my_data_account.new();

        Ok(())
    }


    pub fn update_my_data (_ctx: Context<UpdateData>) -> ProgramResult {
        
        let my_data  = &mut _ctx.accounts.my_data_account;

        my_data.count +=1 ;
        my_data.message = format!("Updated with count : {}", my_data.count);

        Ok(())
    }
}

