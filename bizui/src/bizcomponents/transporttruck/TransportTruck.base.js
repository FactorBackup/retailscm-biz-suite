import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


const menuData = {menuName:"运输车", menuFor: "transportTruck",
  		subItems: [
  {name: 'transportTaskList', displayName:'运输任务', icon:'tasks',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  
  		],
}


const settingMenuData = {menuName:"运输车", menuFor: "transportTruck",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: '序号',
  name: '名称',
  plateNumber: '车牌号码',
  contactNumber: '联系电话',
  vehicleLicenseNumber: '汽车牌照号码',
  engineNumber: '发动机号',
  makeDate: '制造日期',
  mileage: '里程',
  bodyColor: '车身颜色',
  owner: '业主',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'transportTruck') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.plateNumber, debugtype: 'string', dataIndex: 'plateNumber', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.contactNumber, debugtype: 'string', dataIndex: 'contactNumber', width: '15',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.vehicleLicenseNumber, debugtype: 'string', dataIndex: 'vehicleLicenseNumber', width: '10',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.engineNumber, debugtype: 'string', dataIndex: 'engineNumber', width: '11',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.makeDate, dataIndex: 'makeDate', render: (text, record) =>renderDateCell(text,record), sorter: true },
  { title: fieldLabels.mileage, debugtype: 'string', dataIndex: 'mileage', width: '10',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.bodyColor, debugtype: 'string', dataIndex: 'bodyColor', width: '6',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.owner, dataIndex: 'owner', render: (text, record) => renderReferenceCell(text, record), sorter:true},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(transportTruck,targetComponent)=>{

  const userContext = null
  return (
    <div key={transportTruck.id}>
	
      <DescriptionList  key={transportTruck.id} size="small" col="4">
        <Description term="序号">{transportTruck.id}</Description> 
        <Description term="名称">{transportTruck.name}</Description> 
        <Description term="车牌号码">{transportTruck.plateNumber}</Description> 
        <Description term="联系电话">{transportTruck.contactNumber}</Description> 
        <Description term="汽车牌照号码">{transportTruck.vehicleLicenseNumber}</Description> 
        <Description term="发动机号">{transportTruck.engineNumber}</Description> 
        <Description term="制造日期"><div>{ moment(transportTruck.makeDate).format('YYYY-MM-DD')}</div></Description> 
        <Description term="里程">{transportTruck.mileage}</Description> 
        <Description term="车身颜色">{transportTruck.bodyColor}</Description> 
        <Description term="业主"><div>{transportTruck.owner==null?appLocaleName(userContext,"NotAssigned"):`${transportTruck.owner.displayName}(${transportTruck.owner.id})`}
        </div></Description>
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	



const TransportTruckBase={menuData,displayColumns,fieldLabels,renderItemOfList}
export default TransportTruckBase



