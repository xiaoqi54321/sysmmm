package com.dzt.demo.service.impl;

import com.dzt.demo.dao.SyslogDao;
import com.dzt.demo.service.SyslogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SyslogServiceImpl implements SyslogService {

    @Autowired
    private SyslogDao syslogDao;

    @Override
    public List<Map<String, Object>> queryData() {
        List<Map<String, Object>> list= syslogDao.queryData();
        return list;
    }

    @Override
    public Map<String, Object> list(Map paginator) throws Exception {
        Map<String, Object> resultList =new HashMap<String, Object>();

        int total= syslogDao.countSyslogList(paginator);
        int startindex=(Integer.valueOf(paginator.get("paginator.page").toString())-1)*Integer.valueOf(paginator.get("paginator.limit").toString());
        int sumPages=total/Integer.valueOf(paginator.get("paginator.limit").toString());

        paginator.put("startIndex",startindex);
        paginator.put("limit",Integer.valueOf(paginator.get("paginator.limit").toString()));

        List<Map<String,Object>> syslogList= syslogDao.list(paginator);

        resultList.put("data",syslogList);
        resultList.put("total",total);
        resultList.put("code",0);
        resultList.put("msg","");
        return resultList;

    }

    @Override
    public Map<String, Object> deriveControl(Map<String, Object> paginator) throws Exception {
        Map<String, Object> resultList =new HashMap<String, Object>();



        if( paginator.get("intranetIp").toString().equals("")==true){
            paginator.put("intranetIp",null);
        }else {
            List<String> intranetIp = Arrays.asList(paginator.get("intranetIp").toString().split(","));
            paginator.put("intranetIp",intranetIp);

        }
        if( paginator.get("intranetPort").toString().equals("")==true){
            paginator.put("intranetPort",null);
        }else {
            List<String> intranetPort = Arrays.asList(paginator.get("intranetPort").toString().split(","));
            paginator.put("intranetPort",intranetPort);

        }

        int total= syslogDao.countControl(paginator);
        int startindex=(Integer.valueOf(paginator.get("paginator.page").toString())-1)*Integer.valueOf(paginator.get("paginator.limit").toString());
        int sumPages=total/Integer.valueOf(paginator.get("paginator.limit").toString());

        paginator.put("startIndex",startindex);
        paginator.put("limit",Integer.valueOf(paginator.get("paginator.limit").toString()));





        List<Map<String,Object>> syslogList= syslogDao.deriveControl(paginator);

        resultList.put("data",syslogList);
        resultList.put("total",total);
        resultList.put("code",0);
        resultList.put("msg","");
        return resultList;

    }


}
