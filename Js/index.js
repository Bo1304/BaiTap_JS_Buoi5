document.getElementById("Result_BT1").onclick = function BT1() {
    var DiemChuan = document.getElementById("Score_").value * 1;
    var KhuVuc = document.getElementById("Choose_Area").value * 1;
    var DoiTuong = document.getElementById("Choose_Obj").value * 1;
    var Diem1 = document.getElementById("Score_First").value * 1;
    var Diem2 = document.getElementById("Score_second").value * 1;
    var Diem3 = document.getElementById("Score_third").value * 1;
    var Sum_DiemChuan = Diem1 + Diem2 + Diem3 + KhuVuc + DoiTuong;
    var content = "";
    if (Sum_DiemChuan >= DiemChuan && Diem1 != 0 && Diem2 != 0 && Diem3 != 0) {
        if (Diem1 > 10 || Diem2 > 10 || Diem3 > 10) {
            content = "Bạn đã nhập số điểm quá 10 vì nó không thực tế";

    // điều kiện này điểm sẽ không được nhập quá 10 điểm, nên sẽ bao luôn điều kiện tổng 3 môn không quá 30 điểm
        }
        else {
            content = "Bạn đã đậu, tổng điểm của bạn là: " + Sum_DiemChuan;
        }

    }
    else if (Diem1 == 0 || Diem2 == 0 || Diem3 == 0) {
        content = "Bạn đã rớt vì một trong các điểm môn là 0";
      
    }
    else {
        content = "Bạn đã rớt, tổng điểm của bạn là: " + Sum_DiemChuan;
       
    }
    document.getElementById("divBT1").innerHTML = content;

    document.getElementById("divBT1").classList.add("divBT1");
    // console.log("hh",DiemChuan,KhuVuc,DoiTuong , Diem1,Diem2,Diem3);
}



document.getElementById("Result_BT2").onclick = function BT2_TinhDien() {
    var Name = document.getElementById("FullName").value;
    var Number_KW = Number(document.getElementById("Num_Kw").value);
    var content ="";
    var Price_Kw1 = 500 *1;
    var Price_Kw2 = 650 *1;
    var Price_Kw3 = 850 *1;
    var Price_Kw4 = 1100 *1;
    var Price_Kw5 = 1300 *1;
    let current = new Intl.NumberFormat("vi", {
        style : 'currency', currency : 'VND'
    });

    var Bill1_kw = Price_Kw1 * Number_KW ;
    var Bill2_kw = (Price_Kw2 * Number_KW) - (150 *50) ;
    var Bill3_kw = (Price_Kw3 * Number_KW) - (150 *50) - (200 * 100);
    var Bill4_kw = (Price_Kw4 * Number_KW) - (150 *50) - (200 * 100) -(250 * 200);
    var Bill5_kw = (Price_Kw5 * Number_KW) - (150 *50) - (200 * 100) -(250 * 200) - (200 * 350);

    if(Number_KW <=50 ) {
        content ="Họ tên: "+Name+"  Tiền điện: "+current.format(Bill1_kw);
    }
    else if(Number_KW <=100 && Number_KW > 50){
        content ="Họ tên: "+Name+"  Tiền điện: "+current.format(Bill2_kw);

    }
    else if(Number_KW <=200 && Number_KW > 100){
        content ="Họ tên: "+Name+"  Tiền điện: "+current.format(Bill3_kw);
    }
    else if(Number_KW <= 350 && Number_KW >200){
        content ="Họ tên: "+Name+"  Tiền điện: "+current.format(Bill4_kw);;

    }
    else if(Number_KW > 350){
        content ="Họ tên: "+Name+"  Tiền điện: "+current.format(Bill5_kw);
    }
    else{
        alert("Không hợp lệ bạn vui lòng thử lại");
    }

    document.getElementById("divBT2").innerHTML = content  ;
    document.getElementById("divBT2").classList.add("divBT2") ;
    // console.log("hh",Number_KW,Name);
}


document.getElementById("Result_BT3").onclick = function ThueThuNhap(){
    var fullName_ = document.getElementById("FullName1").value;
    var Sum_income = document.getElementById("Sum_Income").value;
    var Num_people = document.getElementById("Num_People").value;
    var content = "";
    var TinhThue = Sum_income - 4000000 - (1600000 *Num_people);
    let current = new Intl.NumberFormat("vi", {
        style : 'currency', currency : 'VND'
    });
    //var Tinh = TinhThue * 0.1;

    if(Sum_income <= 60000000){
        TinhThue = TinhThue * 0.05;
        content= "Họ tên: "+fullName_+" ,Tiền thuế thu nhập cá nhân: "+current.format(TinhThue);
    }
    else if(Sum_income >60000000 && Sum_income <= 120000000){
        TinhThue = TinhThue * 0.1;
        content= "Họ tên: "+fullName_+" ,Tiền thuế thu nhập cá nhân: "+current.format(TinhThue);
    }
    else if(Sum_income >120000000 && Sum_income <= 210000000){
        TinhThue = TinhThue * 0.15;
        content= "Họ tên: "+fullName_+" ,Tiền thuế thu nhập cá nhân: "+current.format(TinhThue);
    }
    else if(Sum_income >210000000 && Sum_income <= 384000000){
        TinhThue = TinhThue * 0.2;
        content= "Họ tên: "+fullName_+" ,Tiền thuế thu nhập cá nhân: "+current.format(TinhThue);
    }
    else if(Sum_income >384000000 && Sum_income <= 624000000){
        TinhThue = TinhThue * 0.25;
        content= "Họ tên: "+fullName_+" ,Tiền thuế thu nhập cá nhân: "+current.format(TinhThue);
    }
    else if(Sum_income >624000000 && Sum_income <= 960000000){
        TinhThue = TinhThue * 0.3;
        content= "Họ tên: "+fullName_+" ,Tiền thuế thu nhập cá nhân: "+current.format(TinhThue);
    }
    else if(Sum_income >960000000 ){
        TinhThue = TinhThue * 0.35;
        content= "Họ tên: "+fullName_+" ,Tiền thuế thu nhập cá nhân: "+current.format(TinhThue);
    }
    else{
        alert("Không hợp lệ bạn vui lòng nhập lại");
    }

    document.getElementById("divBT3").innerHTML = content;
    document.getElementById("divBT3").classList.add("divBT3");
    console.log("hh",fullName,TinhThue);
} 


document.getElementById("Result_BT4").onclick = function TinhTienCap (){
    var Choose_client = Number(document.getElementById("Choose_Client").value);
    var Id_client = Number(document.getElementById("Id_Client").value);
    var Num_Premium_channel = Number(document.getElementById("Premium_Channel").value);
    var Num_Conn = Number(document.getElementById("Num_Connect").value);
    var content = "";
    let current = new Intl.NumberFormat("de-DE", {
        style : 'currency', currency : 'USD'
    });

    var fee_Invoice_Dan = 4.5;
    var fee_Basic_service_Dan = 20.5;
    var Premium_channel_Dan = 7.5 * Num_Premium_channel;
    BillOfDan =fee_Invoice_Dan + fee_Basic_service_Dan + Premium_channel_Dan;

    var fee_Invoice_DoanhNghiep = 15;
    var fee_Basic_service_DoanhNghiep = 75;
    var Vr2 = 5;
    var Premium_channel_DoanhNghiep = 50 * Num_Premium_channel;
    var BillOfDoanhNghiep = fee_Invoice_DoanhNghiep + fee_Basic_service_DoanhNghiep + Premium_channel_DoanhNghiep;
    var BillOfDoanhNghiep_Vr2 = (fee_Invoice_DoanhNghiep + fee_Basic_service_DoanhNghiep+ (Vr2 *Num_Conn -50 ) + Premium_channel_DoanhNghiep);


    if(Choose_client ==1 ){
       
        content = "Mã khách hàng là: "+Id_client+"  ,Tiền cáp  "+current.format(BillOfDan);
    }
    else if(Choose_client == 2){
        if(Num_Conn <= 10){
            content = "Mã khách hàng là: "+Id_client+"  ,Tiền cáp  "+ current.format(BillOfDoanhNghiep);
        }
        else{

            content = "Mã khách hàng là: "+Id_client+"  ,Tiền cáp  "+ current.format(BillOfDoanhNghiep_Vr2);
        }
    }
    else{
        alert("Không hợp lệ bạn vui lòng kiểm tra lại");
    }

    document.getElementById("divBT4").innerHTML = content;
    document.getElementById("divBT4").classList.add("divBT4");
}


 function onchangeClient (){
    var Choose1 = document.getElementById("Choose_Client").value;

   if(Choose1 == 2){
    document.getElementById("conn").style.display= "block";
   }
   else{
    document.getElementById("conn").style.display= "none";
   }
}