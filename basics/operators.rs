use std::mem;

fn main(){
  let mut a = 2 +3 +5;
  println!("{}",a);
  a = a + 1;
  println!("{}",a);
  a -= 5 ;
  println!("{}",a);
  println!("reminder of {} / {} = {}",a,3, (a % 3));
  print!("reminer of {} / {} = {} ",3, 2, (3%2));

  let a_cubed = i32::pow(a,3);
  println!("{} cubed is {} ",a,a_cubed);

  let squared = i32::pow(5,2);
  println!("{} squared is {} ",5,squared);

  let b = 2.5;
  let b_cubed = f64::powi(b,3);
  let b_to_PI = f64::powf(b,std::f64::consts::PI);

  println!("{} cubed = {} , {}^pi = {}",b, b_cubed,b ,b_to_PI);

  let c = 1 | 2;
  println!("1|2 = {} ",c );
  let two_to_10 = 1 << 10; // >>
  println!("2^10 = {}",two_to_10);
}

