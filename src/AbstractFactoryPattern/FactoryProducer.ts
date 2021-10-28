/**
 * 何时使用：系统的产品有多于一个的产品族，而系统只消费其中某一族的产品。
 * 使用场景： 1、QQ 换皮肤，一整套一起换。 2、生成不同操作系统的程序。
 * 注意事项：产品族难扩展，产品等级易扩展。
 */

interface Shape {
    draw(): void
}

// 创建实现接口的实体类。
class Rectangle implements Shape {
    draw(): void {
        console.log("Inside Rectangle::draw() method.")
    }
}

class Circle implements Shape {
    draw(): void {
        console.log("Inside Circle::draw() method.")
    }
}

// -------

interface Color {
    fill(): void
}

// 创建实现接口的实体类。
class Red implements Color {
    fill(): void {
        console.log('Inside Red::fill() method.')
    }
}

class Blue implements Color {
    fill(): void {
        console.log('Inside Blue::fill() method.')
    }
}


// 创建抽像工厂
abstract class AbstractFactory {
    abstract getColor(colorType: string): Color;
    abstract getShape(shapeType: string): Shape;
}

class ShapeFactory extends AbstractFactory {
    getColor(colorType: string): Color {
        return null;
    }
    getShape(shapeType: string): Shape {
        if (shapeType === null) {
            return null
        }
        switch (shapeType) {
            case 'Circle':
                return new Circle();
            case 'Rectangle':
                return new Rectangle();
            default:
                return null;
        }
    }
}

class ColorFactory extends AbstractFactory {
    getColor(colorType: string): Color {
        if (colorType === null) {
            return null
        }
        switch (colorType) {
            case 'RED':
                return new Red();
            case 'BLUE':
                return new Blue();
            default:
                return null;
        }
    }
    getShape(shapeType: string): Shape {
        return null;
    }

}

class FactoryProducer {
    static getFactory(type: string): AbstractFactory {
        if (type === null) {
            return null
        }
        switch (type) {
            case 'SHAPE':
                return new ShapeFactory();
            case 'COLOR':
                return new ColorFactory();
            default:
                return null;
        }
    }
}

export {
    FactoryProducer,
    AbstractFactory
}