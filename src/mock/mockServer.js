import Mock from 'mockjs'
import data from './json/shouye_data.json';
import cateList from './json/fenlei_zhuanqu'
Mock.mock('/homedata',{code:0,data:data})
Mock.mock('/itemdata',{code:0,data:cateList})
