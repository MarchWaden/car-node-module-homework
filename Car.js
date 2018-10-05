class Car{
    constructor(color, convertible){
      this.color = color;
      this.convertible = convertible;
      this.speed = 0;
    }
    accelerate(acceleration){
        this.speed += acceleration;
    }
    decelerate(deceleration){
      this.speed -= deceleration;
    }
}
module.exports = Car;
