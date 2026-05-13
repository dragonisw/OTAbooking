<?php
/*
Template Name: Booking Form
*/
get_header();
?>

<main id="main" class="site-main">
    <section class="booking-form-section">
        <h2>Đặt phòng</h2>
        <form class="booking-form" method="post" action="">
            <label for="name">Họ và tên:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="phone">Số điện thoại:</label>
            <input type="text" id="phone" name="phone" required>

            <label for="destination">Điểm đến:</label>
            <input type="text" id="destination" name="destination" required>

            <label for="checkin">Ngày nhận phòng:</label>
            <input type="date" id="checkin" name="checkin" required>

            <label for="checkout">Ngày trả phòng:</label>
            <input type="date" id="checkout" name="checkout" required>

            <button type="submit" class="btn btn-primary">Đặt phòng</button>
        </form>
    </section>
</main>

<?php
get_footer();
