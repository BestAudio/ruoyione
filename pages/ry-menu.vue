<template>
<div>
    
    <div class="layui-layout layui-layout-admin">
        <div class="layui-header">
            <div class="layui-logo" id="layui_logo">RuoYi</div>
            <!-- 头部区域（可配合layui已有的水平导航） -->
            <ul class="layui-nav layui-layout-left">
            <li class="layui-nav-item"><a href="">控制台</a></li>
            <li class="layui-nav-item"><a href="">商品管理</a></li>
            <li class="layui-nav-item"><a href="">用户</a></li>
            <li class="layui-nav-item">
                <a href="javascript:;">其它系统</a>
                <dl class="layui-nav-child">
                <dd><a href="">邮件管理</a></dd>
                <dd><a href="">消息管理</a></dd>
                <dd><a href="">授权管理</a></dd>
                </dl>
            </li>
            </ul>
            <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item">
                <a href="javascript:;">
                <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
                贤心
                </a>
                <dl class="layui-nav-child">
                <dd><a href="">基本资料</a></dd>
                <dd><a href="">安全设置</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item"><a href="">退了</a></li>
            </ul>
        </div>
        
        <div class="layui-side layui-bg-black">
            <div class="layui-side-scroll">
            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
            <ul class="layui-nav layui-nav-tree"  lay-filter="test">
                <li class="layui-nav-item layui-nav-itemed">
                <a class="" href="javascript:;">系统管理</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;">用户管理</a></dd>
                    <dd><a href="javascript:;">角色管理</a></dd>
                    <dd><a href="javascript:;">菜单管理</a></dd>
                    <dd><a href="javascript:;">部门管理</a></dd>
                    <dd><a href="javascript:;">岗位管理</a></dd>
                    <dd><a href="javascript:;">字典管理</a></dd>
                    <dd><a href="javascript:;">参数设置</a></dd>
                    <dd><a href="javascript:;">通知公告</a></dd>
                    <dd><a href="javascript:;">日志管理</a></dd>
                </dl>
                </li>
                <li class="layui-nav-item">
                <a href="javascript:;">系统监控</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;">在线用户</a></dd>
                    <dd><a href="javascript:;">定时任务</a></dd>
                    <dd><a href="javascript:;">数据监控</a></dd>
                    <dd><a href="javascript:;">服务监控</a></dd>
                </dl>
                </li>
                <li class="layui-nav-item">
                <a href="javascript:;">系统工具</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;">表单构建</a></dd>
                    <dd><a href="javascript:;">代码生成</a></dd>
                    <dd><a href="javascript:;">系统接口</a></dd>
                </dl>
                </li>
            </ul>
            </div>
        </div>
        
        <!-- <div class="layui-body">
            <div style="padding: 15px;">内容主体区域</div>
        </div>
        
        <div class="layui-footer">
            © layui.com - 底部固定区域
        </div> -->
    </div>
</div> 
</template>

<script>
export default {
    name:'rymeun',
    data () {
        return {
            
        }
    },
    mounted() {
       layui.use('element', function(){
        var element = layui.element;
        });
    }
}
</script>
<style scoped>
#layui_logo{
    font-size: 20px;
    color:white;
}
</style>
