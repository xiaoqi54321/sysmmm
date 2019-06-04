<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>sis数据</title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="../../layuiadmin/static/css/query.css">
<script id="_layui_admin_public" src="../../layuiadmin/public.js" data-base-url="../../layuiadmin" data-module="database.cve"></script>
</head>

<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
                <div class="layui-card layui-form div-scanning-list">
                    <div class="layui-card-header">
                        <div class="layui-row">
                            <div class="layui-col-md4 layui-col-xs3">sys库</div>
                            <div class="layui-col-md8 layui-col-space10 layui-col-xs9"style="display: flex; flex-direction:row-reverse;align-items:center;height:52px;">

                                <button class="layui-btn layui-btn-sm btn-search">搜索</button>

                                <div class="layui-input-inline title-input">
                                  <input type="text" name="fromIp" placeholder="源IP" autocomplete="off" class="layui-input">
                                </div>


								<div class="layui-input-inline title-input">
									 <input type="text" name="intranetPort" placeholder="目的端口" autocomplete="off" class="layui-input">
								</div>

                                <div class="layui-input-inline title-input">
                                    <input type="text" name="intranetIp" placeholder="目的IP" autocomplete="off" class="layui-input">
                                </div>

                                <div class="layui-input-inline title-input">
									 <input type="text" name="userName" placeholder="用户名" autocomplete="off" class="layui-input">
								</div>


                                <div class="layui-form-item">
                                    <label class="layui-form-label">是否成功</label>
                                    <div class="layui-input-block">
                                        <input type="checkbox" checked="checked" value="success" name="result" placeholder="是否成功" lay-skin="switch" autocomplete="off" class="layui-input">
                                    </div>
                                </div>



                                <div class="layui-input-inline title-input">
                                    <%--                                    <input type="text" name="FromHost" placeholder="采集设备源" autocomplete="off" class="layui-input">--%>
                                    <select name="accessingPathWay">
                                        <option value="">--请选择--</option>
                                        <option value="L3VPN">L3VPN</option>
                                        <option value="Web">Web</option>
                                        <option value="login">login</option>
                                    </select>
                                </div>

                                <div class="layui-input-inline title-input">
                                    <input type="text" name="FromHost" placeholder="采集设备源" autocomplete="off" class="layui-input">
                                </div>


                                <div class="layui-input-inline title-input">
                                    <input type="text" name="endTime" placeholder="结束时间" autocomplete="off" class="layui-input layui-input-date">
                                </div>


                                <div class="layui-input-inline title-input">
                                    <input type="text" name="startTime" placeholder="起始时间" autocomplete="off" class="layui-input layui-input-date">
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="layui-card-body">
                        <div class="layui-row">
                            <table class="layui-hide" id="id-table-database-cve"></table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>