<?php

    header("Content-type: text/javascript");
    
    $who = array(
        'interesting people',
        'a multi-displinary team'
    );

    $how = array(
        'craft',
        'develop',
        'make',
        'produce'
    );

    $what = array(
        'effective',
        'striking',
        'powerful',
        'remarkable'
    );

    $whatelse = array(
        'creative',
        'imaginative',
        'innovative',
        'unconventional'
    );
    
    $city = array(
        // Top 100 Most Populous Cities In Africa 2010
        // http://www.blatantworld.com/feature/africa/most_populous_cities.html
        /*
        'Lagos', 'Kinshasa', 'Cairo', 'Ibadan', 'Alexandria', 'Abidjan', 'Cape Town', 'Durban', 'Gizeh', 'Addia Ababa', 'Casablanca', 'Nairobi', 'Dar es Salaam', 'Luanda', 'Dakar', 'Umm Durman', 'Accra', 'Khartoum', 'Benin', 'Kano', 'Algiers', 'Douala', 'Port Harcourt', 'Kaduna', 'Johannesburg', 'Conakry', 'Kumasi', 'Rabat', 'Yaounde', 'Soweto', 'Bamako', 'Harare', 'Pretoria', 'Antananarivo', 'Lubumbashi', 'Lome', 'Aba', 'Muqdisho', 'Mbuji-Mayi', 'Kampala', 'Lusaka', 'Ouagadougou', 'Abuja', 'Brazzaville', 'Port Elizabeth', 'Maputo', 'Maiduguri', 'Ilorin', 'Shubra-El-Khema', 'Monrovia' */
        
        // Top 100 Most Populous Cities In Asia 2010
        // http://www.blatantworld.com/feature/asia/most_populous_cities.html
        /*
        'Shanghai', 'Bombay', 'Karachi', 'Delhi', 'Istanbul', 'Manila', 'Dhaka', 'Soeul', 'Tokyo', 'Jakarta', 'Tehran', 'Peking', 'Lahore', 'Bangkok', 'Singapore', 'Bangalore', 'Baghdad', 'Calcutta', 'Rangoon', 'Riyadh', 'Chongqing', 'Madras', 'Xian', 'Wuhan', 'Ankara', 'Hyderabad', 'Ahmadabad', 'Chengdu', 'Ho Chi Minh', 'Chattagam', 'Yokohama', 'Tianjin', 'Shenyang', 'Pune', 'Harbin', 'Nanjing', 'Surat', 'Pusan', 'Pyongyang', 'Jiddah', 'Kanpur', 'Jaipur', 'Guangzhou', 'Mosul', 'Faisalabad', 'Izmir', 'Changchun', 'Taiyuan', 'Lakhnau', 'Taipei' */
        
        // Top 100 Most Populous Cities In Oceania 2010
        // http://www.blatantworld.com/feature/oceania/most_populous_cities.html
        /*
        'Sydney', 'Melbourne', 'Brisbane', 'Makasar', 'Perth', 'Adelaide', 'Manado', 'Gold Coast-Tweed Heads', 'Auckland', 'Ambon', 'Manukau', 'Christchurch', 'Honolulu', 'Kupang', 'Palu', 'Canberra-Queanbeyan', 'Mataram', 'Kendari', 'Port Moresby', 'Central Coast', 'Newcastle', 'North Shore', 'Wollongong', 'Waitakere', 'Sunshine', 'Wellington', 'Dili', 'Hamilton', 'Bitung', 'Gorontalo', 'Jaya Pura', 'Sorong', 'Geelong', 'Townsville', 'Hobart', 'Pare Pare', 'Tauranga', 'Mobagu', 'Dunedin', 'Tanete', 'Ternate', 'Sombaopu', 'Cairns', 'Nouméa', 'Toowoomba', 'Palopo', 'Lower Hutt', 'Lae', 'Bau Bau', 'Pallangga' */
        
        // List of Fictional Cities
        'Arkham', 'Bikini Bottom', 'Coruscant', 'Emerald City', 'Gotham City', 'Hundred Acre Wood', 'King\'s Landing', 'Metropolis', 'Neo Tokyo', 'New New York', 'Raccoon City', 'San Fransokyo', 'Twin Peaks'
    
    );
    
    $a = rand(0, count($who)-1); $selectedWho = "$who[$a]";
    $b = rand(0, count($how)-1); $selectedHow = "$how[$b]";
    $c = rand(0, count($what)-1); $selectedWhat = "$what[$c]";
    $d = rand(0, count($whatelse)-1); $selectedWhatelse = "$whatelse[$d]";
    $z = rand(0, count($city)-1); $selectedCity = "$city[$z]";

    echo json_encode($selectedWho);
    echo json_encode($selectedHow);
    echo json_encode($selectedWhat);
    echo json_encode($selectedWhatelse);
    echo json_encode($selectedCity);
    
?>
