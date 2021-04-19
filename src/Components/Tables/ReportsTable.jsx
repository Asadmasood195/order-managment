import React, { Fragment, useState } from 'react'

import { Table, Input, InputNumber, Popconfirm, Form, Typography, Select } from 'antd'
const originData = []
const { Option } = Select
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        stock: true,
        address: `London Park no. ${i}`,
    })
}

const ReportsTable = () => {
    const [form] = Form.useForm()
    const [data, setData] = useState(originData)
    const [editingKey, setEditingKey] = useState('')

    const isEditing = (record) => record.key === editingKey

    const columns = [
        {
            title: 'Product Id',
            dataIndex: 'key',
            width: '10%',
            // editable: true,
        },
        {
            title: 'Prodcut Name',
            dataIndex: 'name',
            width: '15%',
            // editable: true,
        },
        {
            title: 'Unit Price',
            dataIndex: 'age',
            width: '15%',
            // editable: true,
        },
        {
            title: 'Package',
            dataIndex: 'age',
            width: '15%',
            // editable: true,
        },
        {
            title: 'Is Discountined',
            dataIndex: 'key',
            width: '15%',
            // editable: true,
        },
        {
            title: 'Supplier',
            dataIndex: 'address',
            width: '20%',
            // editable: true,
        },

    ]
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        }
    })
    return (
        <Fragment>
            <h4 className='h3'>Top Selling Products|Tabular Representation</h4>
            <span>Filter Options:</span>  <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
            </Select>
            <br />
            <br />
            <Form form={form} component={false}>
                <Table
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    scroll={{ x: 'calc(400px + 50%)', y: 240 }}
                />
            </Form>
        </Fragment>
    )
}

export default ReportsTable

