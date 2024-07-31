--[[
    CameraConfig.instance() -- 获取相机单例
    CameraConfig.instance().isFaceFront     -- 是否前置摄像头
    CameraConfig.instance():isGalleryMode() -- 是否是相册模式
    CameraConfig.instance():isPostEdit()    -- 判断是否相机还是后编辑场景

    DeviceConfig.instance() -- 获取设备单例
    DeviceConfig.instance():isIOS()     -- 是否是IOS
    DeviceConfig.instance():isAndroid() -- 是否是Android

    SceneRenderConfig.instance()    -- 渲染配置单例

    KuruConfig.instance()           -- 配置单例
    KuruEngine.getInstance()        -- 引擎单例
    

    BASE_DIRECTORY  -- 根目录



    -- 滤镜节点
    KuruLookUpTableFilterNode.create(filterPath, true, FilterKit.lastSliderValue)
    -- 帧缓冲节点
    KuruFrameBufferNode.create()


    scene
    scene:getTotalElapsedTime() -- 获取当前场景总运行时间   从0开始



    生命周期
        initialize(scene)       -- 初始化场景
        frameReady(scene, dt)   -- 每帧调用 在引擎每帧 preUpdate 之后
        onUpdate(scene)         -- 每帧调用 引擎每帧更新后调用
        reset(scene)            -- 重置场景
        finalize(scene)         -- 释放场景 解除lua脚本


    事件扩展
        获取事件扩展
            g_eventExtension = KuruEventExtension.cast(KuruEngine.getInstance():getExtension("KuruEvent"))
        注册事件回调
            g_eventExtension:getSimpleEvent():addEventHandler(onEventHandler)
        移除事件回调
            g_eventExtension:getSimpleEvent():removeEventHandler(onEventHandler)
        手动抛出事件，不会触发回调
            g_eventExtension:postSimpleEventToApp(eventName, param)
            eventName
                KaleSimpleEventPhotoTake    -- 确认画面
                moveToPurchasePage          -- 跳转到购买页面

        注意：

        客户端事件名称
            KaleSimpleEventPhotoTake    -- 拍照事件
            SimpleEventResponseManager  -- 接口响应事件



        StickerItemStretchType

    
]]
    
function onEventHandler(e)
    local eventObj = KuruEventExtensionSimpleEventArgs.cast(event)
    local eventName = eventObj:getName()
    local res = eventObj:getArg()

    if eventName == "KaleSimpleEventPhotoTake" then
        print("用户点击拍照")
    end
end

kuruStatus = KuruStatusExtension.cast(kuruEngineInstance:getExtension("KuruStatus"))
-- 获取appInfo
g_appInfo = kuruStatus:apply("GetAppInfo", "")
-- 获取appsetting
g_appSetting = kuruStatus:apply("getAppSetting", "")
-- 获取app CountryCode
local countryCode = string.upper(kuruStatus:apply("getAppSetting", "{ \"name\" : \"CountryCode\" }"))

-- 获取事件扩展
kuruTouch = KuruTouchExtension.cast(kuruEngineInstance:getExtension("KuruTouch"))
-- 注册事件回调
kuruTouch:getTouchUpEvent():addEventHandler(onTouchDown)




g_faceNode_1:getMaterial():getParameter("u_para"):setVector4(Vector4.create(0.51,0.64,0.2,0))
Bloom.hightLightPassNode:getMaterial():getParameter("u_threshold"):setFloat(ModelConfig.Threshold)
node:getMaterial():getParameter("isFit"):setBool(isFit)