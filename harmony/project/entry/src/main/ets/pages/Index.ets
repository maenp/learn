import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';


@Entry // 代表这是入口组件
@Component // 代表这是一个自定义组件
// struct: 代表这是一个结构体 
// Index: 代表这个结构体的名字
struct Index { 
  // @State: 代表这是一个状态，状态改变会触发页面重新渲染
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Divider()
        Button(){
          Text('Next').fontSize(30).fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule).margin({top: 20})
        .backgroundColor('#0D9FFB')
        .width('40%').height('5%')
        .onClick(()=>{
          console.info('click Next')
          router.pushUrl({url: 'pages/Second'}).then(()=>{
            console.info('click Next success')
          }).catch((err: BusinessError)=>{
            console.info('click Next error', err)
          })
        })
        Divider()
        Button(){
          Text('修改文案').fontSize(30).fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule).margin({top: 20})
        .backgroundColor('#0D9FFB')
        .width('40%').height('5%')
        .onClick(()=>{
          console.info('修改文案')
          this.message = this.message + "+1"
        })
      }.width('100%')
    }.height('100%')
  }



}