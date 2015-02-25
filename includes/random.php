<?php

    /* */
    
    $city = array(
        
        // 50 Largest Cities in Africa
        // http://theafricaneconomist.com/50-largest-cities-in-africa/#.VO2_r1PF8Yc
        'Lagos', 'Cairo', 'Kinshasa', 'Alexandria', 'Casablanca', 'Ivory Coast', 'Kano', 'Ibadan', 'Cape Town', 'Addis Ababa', 'Giza', 'Nairobi', 'Dar es Salaam', 'Dakar', 'Durban', 'Luanda', 'Tripoli', 'Harare', 'Algiers', 'Omdurman', 'Johannesburg', 'Accra', 'Rabat', 'Conakry', 'Kaduna', 'Khartoum', 'Douala', 'Pretoria', 'Soweto', 'Lusaka', 'Mogadishu', 'Brazzaville', 'Yaoundé', 'Maputo', 'Lubumbashi', 'Port Harcourt', 'Benin', 'Freetown', 'Subra al-Haymah', 'Maiduguri', 'Kampala', 'Bulawayo', 'Fez', 'Bamako', 'Mbuji-May', 'Zaria', 'Antananarivo', 'Ouagadougou', 'Port Elizabeth', 'Kolwezi',
    
        // Top 100 Most Populous Cities In Asia 2010
        // http://www.blatantworld.com/feature/asia/most_populous_cities.html
        /* 'Shanghai', 'Bombay', 'Karachi', 'Delhi', 'Istanbul', 'Manila', 'Dhaka', 'Soeul', 'Tokyo', 'Jakarta', 'Tehran', 'Peking', 'Lahore', 'Bangkok', 'Singapore', 'Bangalore', 'Baghdad', 'Calcutta', 'Rangoon', 'Riyadh', 'Chongqing', 'Madras', 'Xian', 'Wuhan', 'Ankara', 'Hyderabad', 'Ahmadabad', 'Chengdu', 'Ho Chi Minh', 'Chattagam', 'Yokohama', 'Tianjin', 'Shenyang', 'Pune', 'Harbin', 'Nanjing', 'Surat', 'Pusan', 'Pyongyang', 'Jiddah', 'Kanpur', 'Jaipur', 'Guangzhou', 'Mosul', 'Faisalabad', 'Izmir', 'Changchun', 'Taiyuan', 'Lakhnau', 'Taipei' */
    
    );

    $a = rand(0, count($city)-1); $selectedCity = "$city[$a]";

    /* */
    
    $weare = array(
        'a multi-displinary <mark>team</mark>',
        'an independent <mark>studio</mark>'
    );

    $b = rand(0, count($weare)-1); $selectedWeare = "$weare[$b]";

    /* */
    
    $doing = array(
        'building',
        'crafting',
        'making',
        'producing'
    );

    $c = rand(0, count($doing)-1); $selectedDoing = "$doing[$c]";

    /* */
    
    $what = array(
        'design',
        'work'
    );

    $d = rand(0, count($what)-1); $selectedWhat = "$what[$d]";

?>
