fn if_statement(temp:i8){
  if temp > 30 {
    println!("really hot outside!!");
  } else if temp < 10 {
    println!("Brrr it's damn cold!");
  } else {
    println!("It's is really nice outside!");
  }
  let day = if temp > 20 {"Sunny"} else {"cloudy"};
  println!("today is {}",day );

  println!("it is {}", if temp > 20 {"hot"} else if temp < 10 {"cold"} else {"Okey"});
}

fn while_loop(){
  let mut x = 1;
  while x < 10000 {
    x *= 2;
    if x == 64 {continue;}
    if x == 256 {break;}
    println!("x = {} ",x );
  }
  let mut y = 1;
  loop {
    y *= 2;
    println!("y = {}", y);
    if y == 1<<10 { break;}
  }

}

fn for_loop(){
  for i in 1..11 {
    println!("i is  {}",i );
  }
  for (pos,y) in (30..41).enumerate(){
    println!("index is (position) = {} : value is = {}", pos,y )
  }
}

fn main(){
  if_statement(5);
  while_loop();
  for_loop();
}