<?php /* Template Name: Home Booking Agency */ ?>
<?php get_header(); ?>

<!-- Banner Search -->
<div class="relative bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 h-80 flex items-center bg-white p-6 rounded-2xl shadow-xl overflow-hidden">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" alt="banner" class="absolute inset-0 w-full h-full object-cover opacity-60">
    <div class="relative z-10 w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-90 rounded-xl shadow-lg">
        <form class="flex flex-col md:flex-row gap-4 items-center">
            <input type="text" placeholder="Nhập điểm du lịch hoặc tên khách sạn" class="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <input type="date" class="px-4 py-2 rounded border border-gray-300">
            <input type="date" class="px-4 py-2 rounded border border-gray-300">
            <select class="px-4 py-2 rounded border border-gray-300">
                <option>2 người lớn, 1 phòng</option>
                <option>1 người lớn, 1 phòng</option>
                <option>3 người lớn, 1 phòng</option>
            </select>
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Tìm</button>
        </form>
    </div>
</div>

<!-- Popular Destinations -->
<section class="max-w-6xl mx-auto py-12">
    <h2 class="text-2xl font-bold mb-6 text-center">Các điểm đến thu hút nhất Việt Nam</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div class="bg-white rounded-xl shadow-lg hover:scale-105 transition p-4 flex flex-col items-center border border-blue-100">
            <img src="https://cdn6.agoda.net/images/MAPS/VIETNAM/VT.jpg" alt="Vũng Tàu" class="w-28 h-20 object-cover rounded mb-2 shadow">
            <div class="font-semibold">Vũng Tàu</div>
            <div class="text-sm text-gray-500">6,329 chỗ ở</div>
        </div>
        <div class="bg-white rounded-xl shadow-lg hover:scale-105 transition p-4 flex flex-col items-center border border-blue-100">
            <img src="https://cdn6.agoda.net/images/MAPS/VIETNAM/HCM.jpg" alt="Hồ Chí Minh" class="w-28 h-20 object-cover rounded mb-2 shadow">
            <div class="font-semibold">Hồ Chí Minh</div>
            <div class="text-sm text-gray-500">15,546 chỗ ở</div>
        </div>
        <div class="bg-white rounded-xl shadow-lg hover:scale-105 transition p-4 flex flex-col items-center border border-blue-100">
            <img src="https://cdn6.agoda.net/images/MAPS/VIETNAM/DL.jpg" alt="Đà Lạt" class="w-28 h-20 object-cover rounded mb-2 shadow">
            <div class="font-semibold">Đà Lạt</div>
            <div class="text-sm text-gray-500">5,165 chỗ ở</div>
        </div>
        <div class="bg-white rounded-xl shadow-lg hover:scale-105 transition p-4 flex flex-col items-center border border-blue-100">
            <img src="https://cdn6.agoda.net/images/MAPS/VIETNAM/DN.jpg" alt="Đà Nẵng" class="w-28 h-20 object-cover rounded mb-2 shadow">
            <div class="font-semibold">Đà Nẵng</div>
            <div class="text-sm text-gray-500">5,534 chỗ ở</div>
        </div>
        <div class="bg-white rounded-xl shadow-lg hover:scale-105 transition p-4 flex flex-col items-center border border-blue-100">
            <img src="https://cdn6.agoda.net/images/MAPS/VIETNAM/HN.jpg" alt="Hà Nội" class="w-28 h-20 object-cover rounded mb-2 shadow">
            <div class="font-semibold">Hà Nội</div>
            <div class="text-sm text-gray-500">10,744 chỗ ở</div>
        </div>
    </div>
</section>

<!-- Promotions -->
<section class="max-w-6xl mx-auto pb-12">
    <h2 class="text-2xl font-bold mb-6 text-center">Chương trình khuyến mãi chỗ ở</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gradient-to-r from-pink-400 to-yellow-300 rounded-xl p-6 text-white shadow-lg flex flex-col items-center">
            <div class="font-bold text-lg mb-2">Nhận ưu đãi 10% khi đặt phòng lần đầu trên app!</div>
            <div class="text-sm">Tải ứng dụng và sử dụng mã: <span class="font-semibold">FIRST10</span></div>
        </div>
        <div class="bg-gradient-to-r from-blue-400 to-green-300 rounded-xl p-6 text-white shadow-lg flex flex-col items-center">
            <div class="font-bold text-lg mb-2">Ưu đãi mùa hè cho nhóm bạn</div>
            <div class="text-sm">Đặt phòng nhóm từ 4 người trở lên, giảm thêm 15%</div>
        </div>
        <div class="bg-gradient-to-r from-purple-400 to-pink-300 rounded-xl p-6 text-white shadow-lg flex flex-col items-center">
            <div class="font-bold text-lg mb-2">Khuyến mãi cuối tuần</div>
            <div class="text-sm">Đặt phòng vào thứ 6, 7, CN giảm ngay 5%</div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
