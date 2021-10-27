/**
 * https://www.runoob.com/design-pattern/factory-pattern.html
 * 工厂模式中着重介绍的是这种通过某个特定的参数，让你一个接口去干对应不同的事而已！而不是调用者知道了类！
 * 属于创建模式，解决子类创建问题的
 */

interface Shape {
    draw(): void
}

class Circle implements Shape {
    draw(): void {
        console.log('Circle')
    }
}

class Square implements Shape {
    draw(): void {
        console.log('Square')
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log('Rectangle')
    }
}

class ShapeFactory {
    getShape(shapeType: string): Shape {
        if (shapeType === null) {
            return null
        }
        switch (shapeType) {
            case 'Circle':
                return new Circle();
            case 'Square':
                return new Square();
            case 'Rectangle':
                return new Rectangle();
            default:
                return null;
        }
    }
}

// usage

let shapeFactory: ShapeFactory = new ShapeFactory();

let shape1:Shape = shapeFactory.getShape('Circle');

shape1.draw();