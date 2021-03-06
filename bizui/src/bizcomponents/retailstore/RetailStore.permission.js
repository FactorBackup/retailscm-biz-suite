

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from '../../components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'

import DashboardTool from '../../common/Dashboard.tool'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './RetailStore.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const internalRenderTitle = (cardsData,targetComponent) =>{
  const linkComp=cardsData.returnURL?<Link to={cardsData.returnURL}> <FontAwesome name="arrow-left"  /> </Link>:null
  return (<div>{linkComp}{cardsData.cardsName}: {cardsData.displayName}</div>)

}
const internalSummaryOf = (retailStore,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{retailStore.id}</Description> 
<Description term="名称">{retailStore.name}</Description> 
<Description term="电话">{retailStore.telephone}</Description> 
<Description term="业主">{retailStore.owner}</Description> 
<Description term="成立">{ moment(retailStore.founded).format('YYYY-MM-DD')}</Description> 
<Description term="纬度">{retailStore.latitude}</Description> 
<Description term="经度">{retailStore.longitude}</Description> 
<Description term="描述">{retailStore.description}</Description> 
<Description term="最后更新时间">{ moment(retailStore.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="当前状态">{retailStore.currentStatus}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = retailStore => {
  const {RetailStoreBase} = GlobalComponents
  return <PermissionSetting targetObject={retailStore}  targetObjectMeta={RetailStoreBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class RetailStorePermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  retailStore = this.props.retailStore
    const { id,displayName, consumerOrderCount, retailStoreOrderCount, goodsCount, transportTaskCount, accountSetCount } = retailStore
    const  returnURL = `/retailStore/${id}/dashboard`
    const cardsData = {cardsName:"双链小超",cardsFor: "retailStore",cardsSource: retailStore,displayName,returnURL,
  		subItems: [
    
      	],
  	};
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const summaryOf = this.props.summaryOf || internalSummaryOf
   
    return (

      <PageHeaderLayout
        title={internalRenderTitle(cardsData,this)}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
      {renderPermissionSetting(cardsData.cardsSource)}
      
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  retailStore: state._retailStore,
}))(Form.create()(RetailStorePermission))

