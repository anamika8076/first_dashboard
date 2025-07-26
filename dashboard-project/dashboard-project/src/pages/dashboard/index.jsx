import {Space,Card,Table,Statistic,Typography} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {ShoppingOutlined} from "@ant-design/icons";
import {UserOutlined} from "@ant-design/icons";
import {DollarCircleOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import {useState} from "react";
import { getCustomers, getInventory, getRevenue, getorders } from "../../API/ndex";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function Dashboard(){
    const [orders,setOrders]=useState(0);
    const [inventory,setInventory]=useState(0);
    const [customers,setCustomers]=useState(0);
    const [revenue,setRevenue]=useState(0);
    useEffect(()=>{
        getorders().then((res)=>{
            setOrders(res.total);
            setRevenue(res.discountedTotal)
        });
        getInventory().then((res)=>{
            setInventory(res.total);
        });
        getCustomers().then((res)=>{
            setCustomers(res.total);
        });
    },[]);
    return (

        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard 
                icon={
                <ShoppingCartOutlined 
                    style={{
                        color:"red",
                        backgroundColor:"rgba(255,192,203,0.5)",
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }} 
                    />
                } 
                title={"orders"} 
                value={orders}
                />
                <DashboardCard
                icon={<ShoppingOutlined
                    style={{
                        color:"red",
                        backgroundColor:"rgba(255,192,203,0.5)",
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }} />} 
                title={"Inventory"} 
                value={inventory}
                />
                <DashboardCard 
                icon={<UserOutlined
                    style={{
                        color:"red",
                        backgroundColor:"rgba(255,192,203,0.5)",
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }} />} 
                title={"customers"} 
                value={customers}
                />
                <DashboardCard 
                icon={<DollarCircleOutlined
                    style={{
                        color:"red",
                        backgroundColor:"rgba(255,192,203,0.5)",
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }} />} 
                title={"Revenue"} 
                value={revenue}
                />
                
            </Space>
            <Space>
                <RecentOrders/>
                <DashboardChart/>
            </Space>
        </Space>
    );
}
function DashboardCard({title,value,icon}){
    return(
        <Card>
                    <Space direction="horizontal">
                    {icon}
                    <Statistic title={title} value={value}/>
                    </Space>
                </Card>
    )
    

}
function RecentOrders(){
    const [dataSource,setDataSource]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        getorders().then((res)=>{
            setDataSource(res.products.splice(0,3));
            setLoading(false);

        });
    },[]);
    
    return(
    <>
    <Typography.Text>Recent Orders</Typography.Text>
    <Table
        columns={[
        {
            title:"Title",
            dataIndex:"title",
        },
        {
            title:"Quantity",
            dataIndex:"quantity",
        },
        {
            title:"Price",
            dataIndex:"discountPrice",
        }
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}


    ></Table>
    </>
    ); 
}
function DashboardChart(){
    const [reveneuData,setRevenueData]=useState({
        labels:[],
        datasets:[]
    })
    useEffect(()=>{
        getRevenue().then(res=>{
            const labels=res.carts.map(cart=>{
                return `user-${cart.userId}`;
            });
            const data=res.carts.map(cart=>{
                return cart.discountedTotal;
            });
            const dataSource=
                {
                    labels,
                    datasets: [
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: 'rgba(255, 0, 0, 0.7)',
                    },
                    
                    ],
                };
                setRevenueData(dataSource)
            



        });
    },[]);
    const options = {
        responsive: true,
        plugins: {
        legend: {
        position: "bottom",
        },
        title: {
        display: true,
        text: 'order revenue',
        },
        },
    };
    
    return (<Card style={{width:500,height:250}}>
        <Bar options={options} data={reveneuData} />
        </Card>);
}
export default Dashboard;