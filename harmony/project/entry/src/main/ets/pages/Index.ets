import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';


@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      //   添加按钮
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
      }.width('100%')
    }.height('100%')
  }



}