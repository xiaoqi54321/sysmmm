layui.define(function (e) {
	const events = {
		search: function () {
			const table = layui.table;
			//执行重载
			table.reload(params().tableid,
				{
				page: {
					curr: 1, //重新从第 1 页开始
					limits:[50,100,500,1000,2000]
				},
				where: params().map
				});
		}
	};

	const params = function () {
		let that = {};
		const $ = layui.$;
		const form = $('.layui-card.layui-form.div-scanning-list');

		let startTime =  Math.round(new Date(form.find('input[name=startTime]').val()).getTime() / 1000);
	//	let endTime = form.find('input[name=endTime]').val() == "" ? "" : Math.round(new Date(form.find('input[name=endTime]').val()).getTime() / 1000);

		let thisTime=form.find('input[name=thisTime]').val()== ""||form.find('input[name=thisTime]').val()== undefined ? "":form.find('input[name=thisTime]').val()

		that.map = {

			'intranetIp': form.find('input[name=intranetIp]').val(),
			'intranetPort': form.find('input[name=intranetPort]').val(),
			'startStatus':thisTime
		}
		//alert(JSON.stringify(that.map));
		that.tableid = "id-table-database-cve";
		return that;
	}

	const initPageRender = function (requestRender) {

		const $ = layui.$;
		const table = layui.table;
		const laydate = layui.laydate;

		//日期控件
		lay('.layui-input-date').each(function () {
			laydate.render({
				elem: this,
				trigger: 'click',
				type:'datetime'
			});
		});

		//表格
		table.render({
			elem: '#' + params().tableid,
			height: 'full-95', //高度填满
			title:'访问日志记录',
			toolbar:true,
			defaultToolbar: ['exports'], //工具栏右侧按钮，默认['filter','exports','print']
			url: '../view/deriveControl', //数据请求URL
			parseData: function(res){ //res 即为原始返回的数据
			return {
				"code": res.code, //解析接口状态
				"msg": res.msg, //解析提示文本
				"count": res.total, //解析数据长度
				"data": res.data //解析数据列表
			};
		},
			cols: [[{
				field: 'ReceivedAt',
				title: '访问时间',
				align: 'center',
				width: 200
			}, {
				field: 'FromHost',
				title: '访问外网IP',
				align: 'center',
				width: 130  ,
				align: 'left',
			},  {
				field: 'accessingResources',
				title: '访问资源',
				width: 119,
				align: 'center',
			},
				{
					field: 'accessingPathWay',
					title: '访问方式',
					width: 100,
					align: 'center',
				},
				{
					field: 'userName',
					title: '用户',
					width: 180,
					align: 'center',
				},
				{
					field: 'fromIp',
					title: '源IP',
					width: 130,
					align: 'center',
				},
				{
					field: 'action',
					title: 'action',
					width: 100,
					align: 'center',
				},
				{
					field: 'intranetIp',
					title: '目的IP',
					width: 130,
					align: 'center',
				},
				{
					field: 'intranetPort',
					title: '目的端口',
					width: 100,
					align: 'center',
				},
				{
					field: 'result',
					title: '访问状态',
					width: 100,
					align: 'center',
				}

			]],
			page: true, //开启分页
			where: params().map
		});
        var sts;
		var t1 ;
			$('.layui-btn.btn-search-stop').click(function () {
			//去掉定时器的方法
			window.clearTimeout(t1);
			//显示查询按钮

			$(this).hide();
			$(this).prev().show();
			$(this).prev().prev().val("stopControl");
			events['search'].call(this);
		})
		//查询
		$('.layui-btn.btn-search').click(function () {
			sts=new Date().getTime();
			$(this).hide();
			$(this).next().show();
			$(this).prev().val(sts);
			events['search'].call(this);
			let tableRefreshTime=  $("select[name=tableRefresh]").val()==""? "0": $("select[name=tableRefresh]").val();

            if (0!=tableRefreshTime) {
				$(this).prev().val("");
				//定时执行，tableRefreshTime秒后执行
				t1 = window.setInterval(refreshCount, 1000 * tableRefreshTime);
				function refreshCount() {
					events['search'].call(this);
				}

			}

			events['search'].call(this);

		});
		$(".select").each(function () {
			var s = $(this);
			var z = parseInt(s.css("z-index"));
			var dt = $(this).children("dt");
			var dd = $(this).children("dd");
			var _show = function () {
				dd.slideDown(200);
				dt.addClass("cur");
				s.css("z-index", z + 1);
			}; //展开效果
			var _hide = function () {
				dd.slideUp(200);
				dt.removeClass("cur");
				s.css("z-index", z);
			}; //关闭效果
			dt.click(function () {
				dd.is(":hidden") ? _show() : _hide();
			});
			dd.find("a").click(function () {
				_hide();
			}); //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
			dd.find("button.btn-canel").click(function () {
				_hide();
			});
			$("body").click(function (i) {
				!$(i.target).parents(".select").first().is(s) ? _hide() : "";
			});
		})

		requestRender();
	};

	layui.use(['alimx.table', 'laydate','jquery'], function () {
		const $ = layui.$;
		const table = layui.table;
		//页面初始化
		initPageRender(function () {});
	});
	e("database.cve", {})
});
