let test = [
  {
    label: "商业",
    value: "01",
    children: [
      {
        children: null,
        label: "独立商业",
        value: "01_01",
      },
      {
        children: null,
        label: "独立商业2",
        value: "01_02",
      },
    ],
  },
  {
    label: "写字楼1",
    value: "03",
    children: [
      {
        children: null,
        label: "独立商业4",
        value: "03_01",
      },
      {
        children: [
          {
            children: null,
            label: "独立商业6",
            value: "03_01_01",
          },
          {
            children: null,
            label: "独立商业7",
            value: "03_02_01",
          },
        ],
        label: "独立商业5",
        value: "03_02",
      },
    ],
  },
  {
    label: "写字楼2",
    value: "04",
  },
  {
    label: "写字楼3",
    value: "05",
  },
];

// console.log("arr", arr);

function getData(arrData) {
  let arr = [];
  function flatData(data) {
    data.forEach((item) => {
      let children=[]
      if(item.children&&item.children.length>0){
        children=item.children
      }
       delete item.children
      arr.push(item);
      if (children.length > 0) {
        flatData(children);
      }
    });
  }
  flatData(arrData);
  return arr;
}

const res=getData(test)
console.log('res',res)

