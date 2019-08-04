use std::mem;

const MEANING_OF_LIFE:u8 = 42; // no fixed address
static S:i32 = 123; // Global
static mut Z:i32 = 123; // Global

fn main(){
println!("{}",MEANING_OF_LIFE);
println!("{}",S);
}