import { FactoryProducer } from './FactoryProducer';
// FactoryProducer 是一个超级大工厂，返回一个抽象类的现实，这个抽象类里又定义了其他的工厂类
// 工厂模式为了隐藏类的现实

const ShapeFactory = FactoryProducer.getFactory('SHAPE');

const shape1 = ShapeFactory.getShape('Circle');
shape1.draw();


const ColorFactory = FactoryProducer.getFactory('COLOR');
const color1 = ColorFactory.getColor('Red');
color1.fill();