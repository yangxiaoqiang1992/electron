const dataSource=[
  {
    key:'1',
    type:'folder', //区分文件还是文件夹，可选 file folder 
    fileType:'', // 区分文件的类型，doc(text,word,pdf...) music(mp3...) video(mp4...) other()
    name:'hello', //文件名
    size:'12324', //文件大小
    listModify:'2019/4/11',//最后修改时间
    status:'2', // 文件状态0：与上传下载无关 1 ：正在下载 2 ：正在上传 3 ：传输完成
  },
  {
    key:'2',
    type:'file', 
    fileType:'pdf', 
    name:'hello.pdf', 
    size:'12324', 
    listModify:'2019/4/11',
    status:'2', 
  },
  {
    key:'3',
    type:'file', 
    fileType:'text', 
    name:'hello.text', 
    size:'12324', 
    listModify:'2019/4/11',
    status:'2', 
  }
]
const columns=[
  {
    title: '文件名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '修改时间',
    dataIndex: 'listModify',
    key: 'listModify'
  },
  {
    title: '大小',
    dataIndex: 'size',
    key: 'size'
  }
]
export {
  dataSource,
  columns
}