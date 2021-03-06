
package com.doublechaintech.retailscm.retailstoreordershippinggroup;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import com.doublechaintech.retailscm.BaseEntity;
import com.doublechaintech.retailscm.SmartList;
import com.doublechaintech.retailscm.MultipleAccessKey;
import com.doublechaintech.retailscm.RetailscmUserContext;

import com.doublechaintech.retailscm.retailstoreorder.RetailStoreOrder;

import com.doublechaintech.retailscm.retailstoreorder.RetailStoreOrderDAO;


public interface RetailStoreOrderShippingGroupDAO{

	
	public RetailStoreOrderShippingGroup load(String id, Map<String,Object> options) throws Exception;
	public void enhanceList(List<RetailStoreOrderShippingGroup> retailStoreOrderShippingGroupList);
	public void collectAndEnhance(BaseEntity ownerEntity);
	
	public void alias(List<BaseEntity> entityList);
	
	
	
	
	public RetailStoreOrderShippingGroup present(RetailStoreOrderShippingGroup retailStoreOrderShippingGroup,Map<String,Object> options) throws Exception;
	public RetailStoreOrderShippingGroup clone(String id, Map<String,Object> options) throws Exception;
	
	
	
	public RetailStoreOrderShippingGroup save(RetailStoreOrderShippingGroup retailStoreOrderShippingGroup,Map<String,Object> options);
	public SmartList<RetailStoreOrderShippingGroup> saveRetailStoreOrderShippingGroupList(SmartList<RetailStoreOrderShippingGroup> retailStoreOrderShippingGroupList,Map<String,Object> options);
	public SmartList<RetailStoreOrderShippingGroup> removeRetailStoreOrderShippingGroupList(SmartList<RetailStoreOrderShippingGroup> retailStoreOrderShippingGroupList,Map<String,Object> options);
	public SmartList<RetailStoreOrderShippingGroup> findRetailStoreOrderShippingGroupWithKey(MultipleAccessKey key,Map<String, Object> options);
	public int countRetailStoreOrderShippingGroupWithKey(MultipleAccessKey key,Map<String, Object> options);
	public Map<String, Integer> countRetailStoreOrderShippingGroupWithGroupKey(String groupKey, MultipleAccessKey filterKey,
			Map<String, Object> options);
	public void delete(String retailStoreOrderShippingGroupId, int version) throws Exception;
	public RetailStoreOrderShippingGroup disconnectFromAll(String retailStoreOrderShippingGroupId, int version) throws Exception;
	public int deleteAll() throws Exception;

	
	
	
	public SmartList<RetailStoreOrderShippingGroup> queryList(String sql, Object ... parmeters);
 
 	public SmartList<RetailStoreOrderShippingGroup> findRetailStoreOrderShippingGroupByBizOrder(String retailStoreOrderId, Map<String,Object> options);
 	public int countRetailStoreOrderShippingGroupByBizOrder(String retailStoreOrderId, Map<String,Object> options);
 	public Map<String, Integer> countRetailStoreOrderShippingGroupByBizOrderIds(String[] ids, Map<String,Object> options);
 	public SmartList<RetailStoreOrderShippingGroup> findRetailStoreOrderShippingGroupByBizOrder(String retailStoreOrderId, int start, int count, Map<String,Object> options);
 	public void analyzeRetailStoreOrderShippingGroupByBizOrder(SmartList<RetailStoreOrderShippingGroup> resultList, String retailStoreOrderId, Map<String,Object> options);

 
 
}


