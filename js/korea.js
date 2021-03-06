$(function(){

    
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(36.3899292,128.3704575), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };
    
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.5212104,127.0434125); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    
    // 마커가 지도 위에 표시되도록 설정합니다
    //marker.setMap(map);
    
    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : "<div style='position: absolute; left: 0px; top: 0px;'><div style='width:140px;padding:1px;text-align:center;'>브라이틀링 청담</div></div>" 
    });
    
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    //infowindow.open(map, marker); 
    
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';                              // 마커이미지 주소
        imageSize = new kakao.maps.Size(24, 35);                // 마커이미지의 크기
        imageOption = {offset: new kakao.maps.Point(17, 36)};   // 마커의 좌표와 일치시킬 이미지 안에서의 좌표설정
        
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    

    
    var arr = new Array();
    arr[0] = ["브라이틀링 청담",37.5212104,127.0434125, "서울 강남구 선릉로 828 (지번) 청담동 84-8","1980287267"];

    arr[1] = ["브라이틀링 판교",37.3925837,127.1032347, "경기 성남시 분당구 판교역로146번길 20 1층 (지번) 백현동 541"];
    
    arr[2] = ["브라이틀링 대구",35.877812,128.625912, "대구 동구 동부로 149 1층 (지번) 신천동 1506"];

    arr[3] = ["브라이틀링 동탄",37.1994174,127.0998057, "경기 화성시 동탄역로 160 1층 (지번) 오산동 967-2419"];

    arr[4] = ["브라이틀링 인천",37.4409021,126.696937, "인천 미추홀구 연남로 35 1층 (지번) 관교동 15"];

    arr[5] = ["브라이틀링 천안",36.7993773,127.1063235, "충남 천안시 서북구 공원로 227 1층 (지번) 불당동 1299"];

    
    
    var markerTmp;      // 마커
    var customOverlay;  // 오버레이
    var contentStr;
    
    for (var i=0;i<arr.length;i++) {
        markerTmp = new daum.maps.Marker({
            position: new daum.maps.LatLng(arr[i][1],arr[i][2]),
            title: arr[i][0],
            image: markerImage,
            map:map
        });
    
        contentStr = "<div class='customoverlay'><a href='https://map.kakao.com/link/map/"+ arr[i][1]+ "' target='_blank'><span class='title'>"+ arr[i][0] +"</span></a></div>";
    
        customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: new daum.maps.LatLng(arr[i][1],arr[i][2]),
            content: contentStr,
            yAnchor: 1 
        });
    }
    
    
    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new kakao.maps.MapTypeControl();
    
    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);    
    
    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();
    
    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);    
})