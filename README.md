# isitasku_backend

Isitasku adalah aplikasi untuk melihat buku paket dan jadwal pembelajaran sesuai dengan sekolah pengguna. Repo ini adalaah repo untuk pengembangan server side dari Aplikasi Isitasku yang dibuat untuk lomba hackaton ITFAIR 2024

# cara menggunakan rest api

## Buku
1. mendapatkan datar buku berdasarkan kelas\
/api/buku/kelas/{kelas}\
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

2. mendapatkan daftar buku berdasarkan mapel\
/api/buku/mapel/{mapel} => format mapel : mapel-{kelas}\
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

3. mendapatkan detail buku berdasarkan id buku\
/api/buku/{id}\
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
## Jadwal

4. Mendapatkan Jadwal Hari ini\
/api/jadwal/{hari}/{kelas}/{jurusan}/{indeks}\
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
    jadwal : json
}
```

5. Mendapatkan daftar jadwal dari kelas tertentu\
/api/jadwal/{kelas}/{jurusan}/{indeks}\
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
        jadwal : json
    },
    {
        id : int,
        hari : string, 
        kelas : int,
        jurusan : string,
        indeks : int,
        jadwal : json
    }
]
```