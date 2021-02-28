        function initMap() {
            var center = new TMap.LatLng(22.856881,113.821576);//设置中心点坐标
            //初始化地图
            var map = new TMap.Map("gmap", {
                zoom: 22,//设置地图缩放级别
                center: center
            });

            //设置infoWindow
            var infoWindow = new TMap.InfoWindow({
                map: map,
                position: center,
                content: "<div><p>Powered by GOVAE</p><img src='/based/images/right.png'></div>"
            });

        }