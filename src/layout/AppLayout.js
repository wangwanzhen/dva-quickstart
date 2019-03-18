import React, { Component } from 'react';
import  styled from 'styled-components';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import {
  Layout
} from 'antd';
const {
  Header,
  Sider,
  Content
} = Layout;
const ResetLayout = styled(Layout)`min-height:100%;`
const ResetHeader = styled(Header)`background-color:#fff;border-bottom:1px solid rgb(230,230,230);height:80px;line-height:80px;`
class AppLayout extends Component {
  render() {
    const {children,location} = this.props;
    return (
      <LocaleProvider locale={zh_CN}>
      <ResetLayout>
        <Layout>
     			<div>1</div>
          <ResetHeader></ResetHeader>
          <Content style={{background:'#fff',display:'flex'}}>{children}</Content>
        </Layout>
      </ResetLayout>
      </LocaleProvider>
      );
}
}

export default AppLayout;
