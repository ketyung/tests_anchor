use anchor_lang::prelude::*;

#[account]
pub struct MyData {

    pub count : u8,

    pub message : String,
}

impl MyData {

    pub fn new(&mut self){
        
        self.count = 1; 
        self.message = format!("Initialized with count {}", self.count);
    }
}