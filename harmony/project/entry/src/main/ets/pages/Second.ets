import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Second {
  @State message: string = 'Hi there'

  build(){
    Row(){
      Column(){
        Text(this.message).fontSize(50).fontWeight(FontWeight.Bold)
        Button(){
          Text('Back').fontSize(25).fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule).margin({top: 20})
        .backgroundColor('#0D9FFB')
        .width('40%').height('5%')
        .onClick(()=>{
          console.log('click Back')
          try {
            router.back()
            console.info('click Back success')
          } catch (err) {
            console.info('click Back error', err)
          }
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}