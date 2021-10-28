class SingleObject{
    private constructor(){}
    private static instance:SingleObject = new SingleObject();
    // 供了一个静态方法 供外界获取它的静态实例
    static getInstance(){
        return this.instance
    }
    showMsg(){
        console.log('showMsg Method !!!')
    }
}

export default SingleObject