use anchor_lang::prelude::*;
use crate::state::MyData;

#[derive(Accounts)]
#[instruction(bump: u8, seed : String)]
pub struct InitData<'info> {

    #[account(
        init_if_needed, payer = payer,
        seeds = [seed.as_ref()], bump = bump,
        space = 8 + 1 + 40 
    )]
    pub my_data_account: Account<'info, MyData>,

    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,

}

#[derive(Accounts)]
pub struct UpdateData<'info> {

    #[account(mut)]
    pub my_data_account : Account<'info, MyData>,

    pub system_program: Program<'info, System>,
}



