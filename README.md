# isitasku_backend

Isitasku adalah aplikasi untuk melihat buku paket dan jadwal pembelajaran sesuai dengan sekolah pengguna. Repo ini adalaah repo untuk pengembangan server side dari Aplikasi Isitasku yang dibuat untuk lomba hackaton ITFAIR 2024

# Cara menggunakan rest api

## Buku
### 1. Mendapatkan datar buku berdasarkan kelas 
Method : GET  
endpoint : **/api/buku/kelas/{kelas}**\
contoh :\
/api/buku/kelas/11 => daftar buku untuk kelas 11\
hasilnya : 
```
{
    id : int,
    judul : string,
    kelas : int,
    mapel : string
} 
```

### 2. mendapatkan daftar buku berdasarkan mapel
Method : GET\
endpoint : **/api/buku/mapel/{mapel}** => format mapel : **mapel-{kelas}**\
contoh: \
/api/buku/mapel/bahasa-indonesia-11 => mendapatkan buku bahasa indonesia untuk kelas 11\
hasilnya : 
```
{
    id : int,
    judul : string,
    kelas : int,
    mapel : string  
} 
```

### 3. mendapatkan detail buku berdasarkan id buku
Method : GET\
endpoint : **/api/buku/{id}**\
contoh :\
/api/buku/1 => mendapatkan buku dengan id 1\
hasilnya :
```
{
    id : int,
    judul : string,
    kelas : int,
    mapel : string,
    url_buku : string,
    daftar_isi : json 
}  
```
### 4. Mendapatkan daftar buku untuk hari itu
Method : GET\
endpoint : **/api/buku/jadwal/{hari}/{kelas}/{jurusan}/{indeks}**
hasilnya :\
```
[
  {
    "id": int,
    "judul": string,
    "kelas": int,
    "mapel": string,
    "url_buku": string,
    "url_cover": string
  }
]
```
contoh :\
**/api/buku/jadwal/jumat/11/sija/1**
hasilnya:\
```
[
  {
    "id": 2,
    "judul": "Buku Pendidikan Pancasila dan Kewarganegaraan SMA/SMK Kelas 11 Kurikulum 2021",
    "kelas": 11,
    "mapel": "PPKN",
    "url_buku": "https://drive.google.com/file/d/1KXLJtEggMn190-fpOh4YIZxJJMb9nS0k/view?usp=drive_link",
    "url_cover": "https://drive.google.com/file/d/1QEXEa7jB2TuKRzIgGElv2GBVYTKfdYlq/view?usp=drive_link"
  }
]
```

## Jadwal

### 5. Mendapatkan Jadwal Hari ini
Method : GET\
endpoint : **/api/jadwal/{hari}/{kelas}/{jurusan}/{indeks}**\
contoh :\
/api/jadwal/selasa/11/sija/1 => Mendapatkan jadwal hari selasa untuk kelas 11 sija 1\
hasilnya: 
```
{
    id : int,
    hari : string, 
    kelas : int,
    jurusan : string,
    indeks : int,
    jadwal : [
        {
            jam : string,
            mapel : string
        },
        {
            jam : string,
            mapel : string
        }
    ]
}
```

### 6. Mendapatkan daftar jadwal dari kelas tertentu
Method : GET\
endpoint : **/api/jadwal/{kelas}/{jurusan}/{indeks}**\
contoh \
/api/jadwal/11/sija/1 => Mendapatkan daftar jadwal untuk kelas 11 sija 1\
hasilnya:
```
[
    {
        id : int,
        hari : string, 
        kelas : int,
        jurusan : string,
        indeks : int,
        jadwal : [
            {
                jam : string,
                mapel : string
            },
            {
                jam : string,
                mapel : string
            }
        ]
    },
    {
        id : int,
        hari : string, 
        kelas : int,
        jurusan : string,
        indeks : int,
        jadwal : [
            {
                jam : string,
                mapel : string
            },
            {
                jam : string,
                mapel : string
            }
        ]
    }
]
```

# Login

### 7. Login ke salah satu akun siswa
Method : POST\
Content-Type : application/json\
endpoint : **/api/login**
```
{
    nis : string,
    password : string
}
```
hasilnya:
```
{
  "access_token": string
}
```
Format access_token => sebuah string base64, jika didecode mengahasilkan data string dengan format json, perlu di parse ke bentuk json untuk diolah datanya, hasil data yang diparse akan jadi seperti berikut :
```
{
    "nama": string,
    "kelas": int,
    "jurusan": string,
    "indeks": int,
    "password": string
}
```

# Laporan
### 8. Mendapatkan seluruh kategori Laporan
Method : GET\
endpoint : **/api/kategori**\
hasilnya :
```
[
    {
        id : int,
        kategori : string
    }

]
```
contoh :
**/api/kategori**
```
[
  {
    "id": 16,
    "kategori": "kesiswaan"
  },
  {
    "id": 17,
    "kategori": "kebersihan"
  },
  {
    "id": 18,
    "kategori": "keamanan"
  },
  {
    "id": 19,
    "kategori": "fasilitas"
  },
  {
    "id": 20,
    "kategori": "testing"
  }
]
```

### 9. Mendapatkan Seluruh Postingan
Method : GET\
endpoint : **/api/laporan**\
hasilnya :
```
[
  {
    "id": int,
    "desc": string,
    "user_id": int,
    "kategori": [
      {
        "id": int,
        "kategori": string
      },
    ],
    "createdAt": datetime,
    "updatedAt": datetime
  }
]
```
contohnya :
```
[
  {
    "id": 1,
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et libero orci.",
    "user_id": 224118615,
    "kategori": [
      {
        "id": 20,
        "kategori": "testing"
      },
      {
        "id": 17,
        "kategori": "kebersihan"
      }
    ],
    "createdAt": "2024-02-25T11:56:54.576Z",
    "updatedAt": "2024-02-25T11:56:54.576Z"
  },
  {
    "id": 3,
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et libero orci.",
    "user_id": 224118615,
    "kategori": [
      {
        "id": 20,
        "kategori": "testing"
      },
      {
        "id": 16,
        "kategori": "kesiswaan"
      },
      {
        "id": 17,
        "kategori": "kebersihan"
      }
    ],
    "createdAt": "2024-02-25T14:40:45.061Z",
    "updatedAt": "2024-02-25T14:40:45.061Z"
  }
]
```
### 10.Mencari Laporan berdasarkan nis siswa
Method : GET\
endpoint : **/api/laporan/siswa/{nis}**\
hasilnya :
```
[
  {
    "id": int,
    "desc": string,
    "user_id": int,
    "kategori": [
      {
        "id": int,
        "kategori": strinng
      }
    ],
    "createdAt": datetime,
    "updatedAt": datetime
  }
]
```
contoh : \
**/api/laporan/siswa/224118615**
```
[
  {
    "id": 1,
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et libero orci.",
    "user_id": 224118615,
    "kategori": [
      {
        "id": 20,
        "kategori": "testing"
      },
      {
        "id": 17,
        "kategori": "kebersihan"
      }
    ],
    "createdAt": "2024-02-25T11:56:54.576Z",
    "updatedAt": "2024-02-25T11:56:54.576Z"
  }
]
```

### 11. Mencari Laporan Berdasarkan Kategori
Method : GET\
endpoint : **/api/laporan/kategori/{kategori}** => Kategori berupa kata-kata
hasilnya : \
```
[
    {
      "id": int,
      "desc": string,
      "user_id": int,
      "kategori": [
        {
          "id": int,
          "kategori": string
        }
      ],
      "createdAt": date,
      "updatedAt": date
    },
    {
        "id": int,
        "desc": string,
        "user_id": int,
        "kategori": [
          {
            "id": int,
            "kategori": string
          }
        ],
        "createdAt": date,
        "updatedAt": date
      }
]
```
contoh : 
**/api/laporan/kategori/testing**

hasilnya : 
```
[
  {
    "id": 1,
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et libero orci.",
    "user_id": 224118615,
    "kategori": [
      {
        "id": 20,
        "kategori": "testing"
      },
      {
        "id": 17,
        "kategori": "kebersihan"
      }
    ],
    "createdAt": "2024-02-25T11:56:54.576Z",
    "updatedAt": "2024-02-25T11:56:54.576Z"
  },
  {
    "id": 4,
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend imperdiet quam sit amet mattis. Nunc dictum sodales tempor. Proin non placerat tortor, ac hendrerit sem. Nulla suscipit ornare vestibulum. Praesent mollis tincidunt convallis. Duis dapibus tristique tortor, sit amet bibendum nunc. Vivamus dictum diam ut lacus molestie, non volutpat arcu ullamcorper. Suspendisse posuere eu enim nec pretium. Donec sapien tortor, sollicitudin ac odio et, sagittis molestie purus. Integer ullamcorper ac nibh ac posuere",
    "user_id": 224118587,
    "kategori": [
      {
        "id": 16,
        "kategori": "kesiswaan"
      },
      {
        "id": 19,
        "kategori": "fasilitas"
      },
      {
        "id": 20,
        "kategori": "testing"
      }
    ],
    "createdAt": "2024-02-25T14:49:36.588Z",
    "updatedAt": "2024-02-25T14:49:36.591Z"
  }
]
```

### 12. Upload Laporan
Method : POST\
endpoint : **/api/laporan**\
Content-Type : application/json
```
{
    "desc" : string,
    "id_siswa" : int,
    "kategori" : [int, int]
}
```
contoh :
POST http://localhost:5000/api/laporan
```
{
    "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend imperdiet quam sit amet mattis. Nunc dictum sodales tempor. Proin non placerat tortor, ac hendrerit sem. Nulla suscipit ornare vestibulum. Praesent mollis tincidunt convallis. Duis dapibus tristique tortor, sit amet bibendum nunc. Vivamus dictum diam ut lacus molestie, non volutpat arcu ullamcorper. Suspendisse posuere eu enim nec pretium. Donec sapien tortor, sollicitudin ac odio et, sagittis molestie purus. Integer ullamcorper ac nibh ac posuere",
    "id_siswa" : 224118587,
    "kategori" : [16, 19, 20] 
}
```
hasilnya :/
```
{
  "message": "Upload Postingan Berhasil"
}
```

### 13. Hapus Laporan Berdasarkan Id
Method : DELETE/
endpoint : **/api/laporan/{id}?kategori={kategori}**\
**Format kategori : {id kategori},{id kategori}**
hasilnya :
```
{
  "message": "Laporan berhasil dihapus"
}
```
contoh : **/api/laporan/3?kategori=20,16,17**\
hasilnya :
```
{
  "message": "Laporan berhasil dihapus"
}
```