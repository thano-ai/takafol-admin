

  export const cityColumns =[
    {
      field: "id", headerName: "ID", width: 70 
    } ,

    {
      field: "cityName",
      headerName: "City Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.cityName}
          </div>
        );
      },
    },

    {
      field: "arabicName",
      headerName: "City Arabic Name",
      width: 230,
    },

    {
      field: "dirs",
      headerName: "Directorates",
      width: 230,
    },

  ];

  export const cityRows =[
    {
      id: 1,
      cityName: "Sana'a",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      arabicName: "صنعاء",
      dirs: "Demo , Demo , Demo , Demo" ,
      
    },

    {
      id: 2,
      cityName: "Taiz",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      arabicName: "تعز",
      dirs: "Demo , Demo , Demo" ,
      
    },

    {
      id: 3,
      cityName: "Hodaidah",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      arabicName: "حديدة",
      dirs: "Demo , Demo , Demo" ,
      
    },

    {
      id: 4,
      cityName: "Ibb",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      arabicName: "اب",
      dirs: "Demo , Demo" ,
      
    },

    {
      id: 5,
      cityName: "Sana'a",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      arabicName: "صنعاء",
      dirs: "Demo , Demo , Demo, Demo" ,
      
    },
    

  ];
  export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "passive",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "passive",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];

export const drugColumns=[

  { field: "id", headerName: "ID", width: 70 },

  {
    field: "name",
    headerName: "Name",
    width: 160,
  },

  {
    field: "scinentificName",
    headerName: "Scinentific Name",
    width: 230,
  },

  {
    field: "pDate",
    headerName: "Production Date",
    width: 160,
  },

  {
    field: "eDate",
    headerName: "Expiry Date",
    width: 160,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const drugRows =[
  {
    id: 1,
    name: "Demo",
    scinentificName: "Demo",
    pDate: "01-01-2001" ,
    eDate: "01-01-2001",
    status: "Bad" ,
    
  },

  {
    id: 2,
    name: "Demo",
    scinentificName: "Demo",
    pDate: "01-01-2001" ,
    eDate: "01-01-2001",
    status: "Bad" ,

    
  },

  {
    id: 3,
    name: "Demo",
    scinentificName: "Demo",
    pDate: "01-01-2001" ,
    eDate: "01-01-2001",
    status: "Good" ,

    
  },

  {
    id: 4,
    name: "Demo",
    scinentificName: "Demo",
    pDate: "01-01-2001" ,
    eDate: "01-01-2001",
    status: "Check" ,

    
  },

  {
    id: 5,
    name: "Demo",
    scinentificName: "Demo",
    pDate: "01-01-2001" ,
    eDate: "01-01-2001",
    status: "Check" ,

    
  },

  {
    id: 6,
    name: "Demo",
    scinentificName: "Demo",
    pDate: "01-01-2001" ,
    eDate: "01-01-2001",
    status: "Good" ,

  },
];


  
  