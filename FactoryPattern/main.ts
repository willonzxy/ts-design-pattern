// usage

import { ShapeFactory } from "./FactoryProducer";

let shapeFactory: ShapeFactory = new ShapeFactory();

let shape1 = shapeFactory.getShape('Circle');

shape1.draw();