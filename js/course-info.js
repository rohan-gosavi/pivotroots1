$(document).ready(function () {
	$(".board, .courseInfo, .duration").hide();
	// Fetching data from json file
	$.getJSON("../assignment/course-data.json", function (data) {
		// ITERATING THROUGH OBJECTS
		$('.monthly-courses').click(function(){
			$(".courseBtn").removeClass("selected");
			$(this).addClass("selected");
			$(".courseInfo, .footer, .boards, #yearlyCourses").hide();
			$("#monthlyCourses, .monthlyfooter").show();
			$(".btn.dropdown-toggle").text("Select Grade");

			$(".dropdown-menu").html("");
			$(".dropdown-menu").attr("id","monthly");
			$.each(data[0].monthly, function (i, el) {
				var itemId = el.grade.toLowerCase().replace(/\s/g, '');
				$(".dropdown-menu").append("<span id='"+itemId+"' class='dropdown-item btn'>"+el.grade+"</span>");
			});
			var arr = 0, board;

			$(document).on('click',"#monthly > #grade6", function(){
				$(".duration").show();
				$("	.board").hide();
				arr = 0;
				dataEntry();
			});
			$(document).on('click',"#monthly > #grade7", function(){
				$(".duration").show();
				$(".board").hide();
				arr = 1;
				dataEntry();
			});
			$(document).on('click',"#monthly > #grade8", function(){
				$(".duration").show();
				$(".board").hide();
				arr = 2;
				dataEntry();
			});
			$(document).on('click',"#monthly > #grade9", function(){
				$(".duration").show();
				$(".board").hide();
				arr = 3;
				dataEntry();
			});
			$(document).on('click',"#monthly > #grade10", function(){
				arr = 4;
				$(".board, .duration").hide();
				$(".boards, .cbse, .ntse").show();
				$(document).on('click',".cbse", function(){
					$(".duration").show();
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "CBSE";
					dataEntry10();
				});
				$(document).on('click',".ntse", function(){
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "NTSE";
					dataEntry10();
				});
			});

			$(document).on('click',"#monthly > #grade11", function(){
				arr = 5;
				$(".board, .duration").hide();
				$(".boards, .cbse, .jeemain, .jeemainadv").show();
				$(document).on('click',".cbse", function(){
					$(".duration").show();
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "CBSE";
					dataEntry11();
				});
				$(document).on('click',".jeemain", function(){
					$(".duration").show();
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "JEE Main";
					dataEntry11();
				});
				$(document).on('click',".jeemainadv", function(){
					$(".duration").show();
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "JEE Main+Advanced";
					dataEntry11();
				});
			});
			$(document).on('click',"#monthly > #grade12", function(){
				arr = 6;
				$(".board, .duration").hide();
				$(".boards, .cbse, .jeemain, .jeemainadv").show();
				$(document).on('click',".cbse", function(){
					$(".duration").show();
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "CBSE";
					dataEntry11();
				});
				$(document).on('click',".jeemain", function(){
					$(".duration").show();
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "JEE Main";
					dataEntry11();
				});
				$(document).on('click',".jeemainadv", function(){
					$(".duration").show();
					$(".board").removeClass("selected");
					$(this).addClass("selected");
					board = "JEE Main+Advanced";
					dataEntry11();
				});
			});

			function dataEntry(){
				$(".oneMonth #valid").text(data[0].monthly[arr].boards.general["5_sessions"].valid);
				$(".oneMonth #price .actualPrice").text(data[0].monthly[arr].boards.general["5_sessions"].price);
				$(".oneMonth #discount").text(data[0].monthly[arr].boards.general["5_sessions"].discount);
				$(".oneMonth #per_class_price").text(data[0].monthly[arr].boards.general["5_sessions"].per_class_price);
				$(".oneMonth #total_sessions").text(data[0].monthly[arr].boards.general["5_sessions"].total_sessions);
				$(".oneMonth #refund").text(data[0].monthly[arr].boards.general["5_sessions"].refund);

				$(".twoMonth #valid").text(data[0].monthly[arr].boards.general["10_sessions"].valid);
				$(".twoMonth #price .actualPrice").text(data[0].monthly[arr].boards.general["10_sessions"].price);
				$(".twoMonth #discount").text(data[0].monthly[arr].boards.general["10_sessions"].discount);
				$(".twoMonth #per_class_price").text(data[0].monthly[arr].boards.general["10_sessions"].per_class_price);
				$(".twoMonth #total_sessions").text(data[0].monthly[arr].boards.general["10_sessions"].total_sessions);
				$(".twoMonth #refund").text(data[0].monthly[arr].boards.general["10_sessions"].refund);

				$(".threeMonth #valid").text(data[0].monthly[arr].boards.general["20_sessions"].valid);
				$(".threeMonth #price .actualPrice").text(data[0].monthly[arr].boards.general["20_sessions"].price);
				$(".threeMonth #discount").text(data[0].monthly[arr].boards.general["20_sessions"].discount);
				$(".threeMonth #per_class_price").text(data[0].monthly[arr].boards.general["20_sessions"].per_class_price);
				$(".threeMonth #total_sessions").text(data[0].monthly[arr].boards.general["20_sessions"].total_sessions);
				$(".threeMonth #refund").text(data[0].monthly[arr].boards.general["20_sessions"].refund);

				$(".sixMonth #valid").text(data[0].monthly[arr].boards.general["45_sessions"].valid);
				$(".sixMonth #price .actualPrice").text(data[0].monthly[arr].boards.general["45_sessions"].price);
				$(".sixMonth #discount").text(data[0].monthly[arr].boards.general["45_sessions"].discount);
				$(".sixMonth #per_class_price").text(data[0].monthly[arr].boards.general["45_sessions"].per_class_price);
				$(".sixMonth #total_sessions").text(data[0].monthly[arr].boards.general["45_sessions"].total_sessions);
				$(".sixMonth #refund").text(data[0].monthly[arr].boards.general["45_sessions"].refund);

				percentage();
			};

			function dataEntry10(){
				$(".oneMonth #valid").text(data[0].monthly[arr].boards[board]["5_sessions"].valid);
				$(".oneMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["5_sessions"].price);
				$(".oneMonth #discount").text(data[0].monthly[arr].boards[board]["5_sessions"].discount);
				$(".oneMonth #per_class_price").text(data[0].monthly[arr].boards[board]["5_sessions"].per_class_price);
				$(".oneMonth #total_sessions").text(data[0].monthly[arr].boards[board]["5_sessions"].total_sessions);
				$(".oneMonth #refund").text(data[0].monthly[arr].boards[board]["5_sessions"].refund);

				$(".twoMonth #valid").text(data[0].monthly[arr].boards[board]["10_sessions"].valid);
				$(".twoMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["10_sessions"].price);
				$(".twoMonth #discount").text(data[0].monthly[arr].boards[board]["10_sessions"].discount);
				$(".twoMonth #per_class_price").text(data[0].monthly[arr].boards[board]["10_sessions"].per_class_price);
				$(".twoMonth #total_sessions").text(data[0].monthly[arr].boards[board]["10_sessions"].total_sessions);
				$(".twoMonth #refund").text(data[0].monthly[arr].boards[board]["10_sessions"].refund);

				$(".threeMonth #valid").text(data[0].monthly[arr].boards[board]["20_sessions"].valid);
				$(".threeMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["20_sessions"].price);
				$(".threeMonth #discount").text(data[0].monthly[arr].boards[board]["20_sessions"].discount);
				$(".threeMonth #per_class_price").text(data[0].monthly[arr].boards[board]["20_sessions"].per_class_price);
				$(".threeMonth #total_sessions").text(data[0].monthly[arr].boards[board]["20_sessions"].total_sessions);
				$(".threeMonth #refund").text(data[0].monthly[arr].boards[board]["20_sessions"].refund);

				$(".sixMonth #valid").text(data[0].monthly[arr].boards[board]["45_sessions"].valid);
				$(".sixMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["45_sessions"].price);
				$(".sixMonth #discount").text(data[0].monthly[arr].boards[board]["45_sessions"].discount);
				$(".sixMonth #per_class_price").text(data[0].monthly[arr].boards[board]["45_sessions"].per_class_price);
				$(".sixMonth #total_sessions").text(data[0].monthly[arr].boards[board]["45_sessions"].total_sessions);
				$(".sixMonth #refund").text(data[0].monthly[arr].boards[board]["45_sessions"].refund);

				percentage();
			};

			function dataEntry11(){
				$(".oneMonth #valid").text(data[0].monthly[arr].boards[board]["5_sessions"].valid);
				$(".oneMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["5_sessions"].price);
				$(".oneMonth #discount").text(data[0].monthly[arr].boards[board]["5_sessions"].discount);
				$(".oneMonth #per_class_price").text(data[0].monthly[arr].boards[board]["5_sessions"].per_class_price);
				$(".oneMonth #total_sessions").text(data[0].monthly[arr].boards[board]["5_sessions"].total_sessions);
				$(".oneMonth #refund").text(data[0].monthly[arr].boards[board]["5_sessions"].refund);

				$(".twoMonth #valid").text(data[0].monthly[arr].boards[board]["10_sessions"].valid);
				$(".twoMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["10_sessions"].price);
				$(".twoMonth #discount").text(data[0].monthly[arr].boards[board]["10_sessions"].discount);
				$(".twoMonth #per_class_price").text(data[0].monthly[arr].boards[board]["10_sessions"].per_class_price);
				$(".twoMonth #total_sessions").text(data[0].monthly[arr].boards[board]["10_sessions"].total_sessions);
				$(".twoMonth #refund").text(data[0].monthly[arr].boards[board]["10_sessions"].refund);

				$(".threeMonth #valid").text(data[0].monthly[arr].boards[board]["20_sessions"].valid);
				$(".threeMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["20_sessions"].price);
				$(".threeMonth #discount").text(data[0].monthly[arr].boards[board]["20_sessions"].discount);
				$(".threeMonth #per_class_price").text(data[0].monthly[arr].boards[board]["20_sessions"].per_class_price);
				$(".threeMonth #total_sessions").text(data[0].monthly[arr].boards[board]["20_sessions"].total_sessions);
				$(".threeMonth #refund").text(data[0].monthly[arr].boards[board]["20_sessions"].refund);

				$(".sixMonth #valid").text(data[0].monthly[arr].boards[board]["45_sessions"].valid);
				$(".sixMonth #price .actualPrice").text(data[0].monthly[arr].boards[board]["45_sessions"].price);
				$(".sixMonth #discount").text(data[0].monthly[arr].boards[board]["45_sessions"].discount);
				$(".sixMonth #per_class_price").text(data[0].monthly[arr].boards[board]["45_sessions"].per_class_price);
				$(".sixMonth #total_sessions").text(data[0].monthly[arr].boards[board]["45_sessions"].total_sessions);
				$(".sixMonth #refund").text(data[0].monthly[arr].boards[board]["45_sessions"].refund);

				percentage();
			};

			function percentage(){
				var onemonthprice = $("#monthlyCourses .oneMonth #price .actualPrice").text();
				var twomonthprice = $("#monthlyCourses .twoMonth #price .actualPrice").text();
				var threemonthprice = $("#monthlyCourses .threeMonth #price .actualPrice").text();
				var sixmonthprice = $("#monthlyCourses .sixMonth #price .actualPrice").text();

				var onemonthdiscount = $("#monthlyCourses .oneMonth #discount").text();
				var twomonthdiscount = $("#monthlyCourses .twoMonth #discount").text();
				var threemonthdiscount = $("#monthlyCourses .threeMonth #discount").text();
				var sixmonthdiscount = $("#monthlyCourses .sixMonth #discount").text();


				$("#monthlyCourses .oneMonth #price .discountedPrice").text((onemonthprice * (100-onemonthdiscount)) / 100);
				$("#monthlyCourses .twoMonth #price .discountedPrice").text((twomonthprice * (100-twomonthdiscount)) / 100);
				$("#monthlyCourses .threeMonth #price .discountedPrice").text((threemonthprice * (100-threemonthdiscount)) / 100);
				$("#monthlyCourses .sixMonth #price .discountedPrice").text((sixmonthprice * (100-sixmonthdiscount)) / 100);
			};
		});

		$('.yearly-courses').click(function(){
			$(".courseBtn").removeClass("selected");
			$(this).addClass("selected");
			$(".courseInfo, .footer, .boards, #monthlyCourses").hide();
			$("#yearlyCourses, .yearlyfooter").show();
			$(".btn.dropdown-toggle").text("Select Grade");

			$(".dropdown-menu").html("");
			$(".dropdown-menu").attr("id","yearly");
			$.each(data[1].yearly, function (i, el) {
				var itemId = el.grade.toLowerCase().replace(/\s/g, '');
				$(".dropdown-menu").append("<span id='"+itemId+"' class='dropdown-item btn'>"+el.grade+"</span>");
			});

			function cbse($ele){
				$(".board").removeClass("selected");
				$ele.addClass("selected");
				board = "CBSE";
				dataEntryYearly();
			}
			function icse($ele){
				$(".board").removeClass("selected");
				$ele.addClass("selected");
				board = "ICSE";
				dataEntryYearly();
			}
			function adv($ele){
				$(".board").removeClass("selected");
				$ele.addClass("selected");
				board = "Advance Level";
				dataEntryYearly();
			}
			function ntse($ele){
				$(".board").removeClass("selected");
				$ele.addClass("selected");
				board = "NTSE";
				dataEntryYearly();
			}
			function jeemain($ele){
				$(".board").removeClass("selected");
				$ele.addClass("selected");
				board = "JEE Main";
				dataEntryYearly();
			}
			function jeemainadv($ele){
				$(".board").removeClass("selected");
				$ele.addClass("selected");
				board = "JEE (Main + Advanced)";
				dataEntryYearly();
			}

			var arr = 0, board, grade;
			$(document).on('click',"#yearly > #grade6", function(){
				arr = 0;
				$(".board").hide();
				$(".boards, .cbse, .icse, .adv").show();
				$(document).on('click',".cbse", function(){cbse($(this));});
				$(document).on('click',".icse", function(){icse($(this));});
				$(document).on('click',".adv", function(){adv($(this));});
			});
			$(document).on('click',"#yearly > #grade7", function(){
				arr = 1;
				$(".board").hide();
				$(".boards, .cbse, .icse, .adv").show();
				$(document).on('click',".cbse", function(){cbse($(this));});
				$(document).on('click',".icse", function(){icse($(this));});
				$(document).on('click',".adv", function(){adv($(this));});
			});
			$(document).on('click',"#yearly > #grade8", function(){
				arr = 2;
				$(".board").hide();
				$(".boards, .cbse, .icse, .adv").show();
				$(document).on('click',".cbse", function(){cbse($(this));});
				$(document).on('click',".icse", function(){icse($(this));});
				$(document).on('click',".adv", function(){adv($(this));});
			});
			$(document).on('click',"#yearly > #grade9", function(){
				arr = 3, grade = 9;
				$(".board").hide();
				$(".boards, .cbse, .icse, .adv").show();
				$(document).on('click',".cbse", function(){cbse($(this));});
				$(document).on('click',".icse", function(){icse($(this));});
				$(document).on('click',".adv", function(){adv($(this));});
			});
			$(document).on('click',"#yearly > #grade10", function(){
				arr = 4, grade= 10;
				$(".board").hide();
				$(".boards, .cbse, .ntse").show();
				$(document).on('click',".cbse", function(){cbse($(this));});
				$(document).on('click',".icse", function(){icse($(this));});
				$(document).on('click',".ntse", function(){ntse($(this));});
			});

			$(document).on('click',"#yearly > #grade11", function(){
				arr = 5, grade =11;
				$(".board").hide();
				$(".boards, .cbse, .jeemain, .jeemainadv").show();
				$(document).on('click',".cbse", function(){cbse($(this));});
				$(document).on('click',".jeemain", function(){jeemain($(this));});
				$(document).on('click',".jeemainadv", function(){jeemainadv($(this));});
			});
			$(document).on('click',"#yearly > #grade12", function(){
				arr = 6, grade = 12;
				$(".board").hide();
				$(".boards, .cbse, .jeemain, .jeemainadv").show();
				$(document).on('click',".cbse", function(){cbse($(this));});
				$(document).on('click',".jeemain", function(){jeemain($(this));});
				$(document).on('click',".jeemainadv", function(){jeemainadv($(this));});
			});

			function dataEntryYearly(){
				$("#yearlyCourses #total_sessions").text(data[1].yearly[arr].boards[board].total_sessions);
				$("#yearlyCourses #online_assignments").text(data[1].yearly[arr].boards[board].online_assignments);
				$("#yearlyCourses #online_pre_assignments").text(data[1].yearly[arr].boards[board].online_pre_assignments);
				$("#yearlyCourses #online_post_assignments").text(data[1].yearly[arr].boards[board].online_post_assignments);
				$("#yearlyCourses #online_tests").text(data[1].yearly[arr].boards[board].online_tests);
				$("#yearlyCourses #career_counselling_sessions").text(data[1].yearly[arr].boards[board].career_counselling_sessions);
				
				if((grade == 9 || grade == 10 || grade == 11 || grade == 12) && board == "CBSE"){
					// console.log(grade+" "+board);
					$("#yearlyCourses #syllabus").text("");
					var syllabusjson = data[1].yearly[arr].boards[board].syllabus[0];
					$.each(syllabusjson, function (key, value) {
						$("#yearlyCourses #syllabus").append("<p class='syllabusTopic mt-3'>"+key+"</p>");
						var syllabus = value.split(" ! ");
						for(var j = 0; j<syllabus.length; j++){
							$("#yearlyCourses #syllabus").append("<p class='syllabuslist'>"+syllabus[j]+"<br/></p>");
						}
					});
				}else{
					var syllabusjson = data[1].yearly[arr].boards[board].syllabus,
						syllabus = syllabusjson.split(" ! ");
					$("#yearlyCourses #syllabus").text("");
					for(var j = 0; j<syllabus.length; j++){
						$("#yearlyCourses #syllabus").append("<p>"+syllabus[j]+"<br/></p>");
					}
				}


				$(".yearlyfooter #price .actualPrice").text(data[1].yearly[arr].boards[board].price);
				$(".yearlyfooter #discount").text(data[1].yearly[arr].boards[board].discount);
				$(".yearlyfooter #per_class_price").text(data[1].yearly[arr].boards[board].per_class_price);

				$(".yearlyfooter #seats").text(data[1].yearly[arr].boards[board].seats);

				yearlyPercentage();
			};

			function yearlyPercentage(){
				var yearlyprice = $(".yearlyfooter #price .actualPrice").text();
				var yearlydiscount = $(".yearlyfooter #discount").text();
				$(".yearlyfooter #price .discountedPrice").text((yearlyprice * (100-yearlydiscount)) / 100);
			};
		});
	});
	$(document).on('click',".dropdown-menu .dropdown-item", function(){
		var item = $(this).text();
		$(".btn.dropdown-toggle").text(item);
	});
});