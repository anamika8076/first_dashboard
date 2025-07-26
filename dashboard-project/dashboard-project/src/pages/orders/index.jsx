import {Typography,Space,Table,Avatar,Rate} from "antd";
import { useEffect, useState } from "react";
import { getInventory, getorders } from "../../API/ndex";
function Orders(){
    const[loading,setLoading]=useState(false)
    const[dataSource,setDataSource]=useState([])
    useEffect(()=>{
        setLoading(true)
        getorders().then(res=>{
            setDataSource(res.products);
            setLoading(false);

        });
    },[]);

    return (

        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Orders</Typography.Title>
            <Table 
            loading={loading}
            columns={[
                
                {
                    title:"title",
                    dataIndex:"title",
                },
                {
                    title:"Price",
                    dataIndex:"price",
                    render:(value)=><span>${value}</span>
                },
                {
                    title:"DiscountedPrice",
                    dataIndex:"discountedPrice",
                    render:(value)=><span>${value}</span>
                },  
                {
                    title:"Quantity",
                    dataIndex:"quantity",
                    
                },
                {
                    title:"Total",
                    dataIndex:"total",
                },
                
                {
                    title:"Brand",
                    dataIndex:"brand",
                },
                {
                    title:"DiscountedPrice",
                    dataIndex:"discountedPrice",
                },
                
            ]}
    dataSource={dataSource}
    pagination={{
        pageSize:5,
    }} 

            ></Table>
        </Space>
    );
}
export default  Orders;