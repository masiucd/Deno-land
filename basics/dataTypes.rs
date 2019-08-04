use std::mem;

fn main(){
  // u = unsigned 0 +
  // i = integer
  let a:u8 = 123; // 8bits

  println!("a = {}", a);


  let mut b:i8 = -45;
  println!("b is mutable and is = {} ", b);
  b = 0;
  println!("now b has the value of = {} ", b);

  // 4 bytes = 32bits
  let mut c = 123456789; //32 bits
  println!("c = {}, size={} bytes", c, mem::size_of_val(&c));
  c = -1;
  println!("c ={} after modification",c);
  //i8 u8 i16 u16 i32 u32 i64 u64

  let z:isize = 123; // isize / usize


}