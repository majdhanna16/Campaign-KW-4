import React, { Component } from "react";
import "./styles.scss";

class Policy extends Component {
	componentDidMount() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	render() {
		return (
			<div className="policy-content">
				<p className="policy-title">سياسة الخصوصية - الأمان</p>
				<p className="policy-description">من خلال التسجيل في الموقع™ أو زيارته ستكونوا قد منحتم الموافقة على جمع واستخدام البيانات الشخصية الخاصة بكم.</p>
				<div className="policy-content">
					<p className="content-title">البيانات الشخصية</p>
					<p className="content-value">يتم جمع البيانات الشخصية وحفظها بشكل آمن باستخدام الضوابط المادية والإلكترونية والإجرائية وفقا للتشريعات المعمول بها، ويتم التعامل معها دائما على أنها معلومات سرية.</p>
					<p className="content-value">
						هذة الضوابط مبررة ومخصصة للاستخدام كالتالي: (أ) لضمان أمن وسرية السجلات ومعلومات العميل، (ب) الحماية ضد أي تهديدات أو مخاطر أو سلامة السجلات وبيانات العملاء، (ج) منع الوصول غير المصرح به لسجلات
						وبيانات العملاء أو استخدامها، مما قد يؤدي إلى ضرر كبير أو إزعاج للعميل.
					</p>
				</div>
				<div className="policy-content">
					<p className="content-title">ما نوع البيانات التي يتم جمعها ؟</p>
					<p className="content-value">
						قد نقوم بجمع معلومات عنكم بشكل مباشر على أمتداد فترة التعاون بيننا. هذه المعلومات قد تكون بيانات شخصية مثل الاسم وتاريخ الميلاد (تاريخ الميلاد)، البريد الإلكتروني والعنوان والتفاصيل المصرفية،
						والوضع المالي، النشاط التجاري، ومعلومات الرصيد المتبقي في الحساب وجدول المعاملات التجارية وبعض الوثائق ضمن برنامج "اعرف عميلك (اعرف عميلك) ".
					</p>
					<p className="content-value">
						بالإضافة إلى ذلك، قد نقوم بجمع معلومات غير المباشرة حولكم، والتي قد تستخدم فقط لغرض التحقق والأمان. وقد تشمل هذه المعلومات عنوان جهازكم (IP)، نوع المتصفح، نظام التشغيل، مزود خدمة الانترنت (ISP)،
						معرف مراقبة الدخول (MAC id) والكوكي.
					</p>
				</div>
				<div className="policy-content">
					<p className="content-title">إدارة البيانات</p>
					<p className="content-value">
						أمن وحماية البيانات الخاصة بك - هو هدفنا الرئيسي و (النهائي). لا تقوم شركة صندوق الاستثمارات الكويتي™ بتوزيع أو بيع أو نقل أي من بيانات عملائها إلى أي جهة غير مصرح بها، أوليست تابعة لها او إلى
						أطراف ثالثة. قد تكشف شركة صندوق الاستثمارات الكويتي™ المعلومات إلى أطراف ثالثة فقط بموجب مبدأ "المعرفة الضرورية" لتقديم خدمات معينة لشركة صندوق الاستثمارات الكويتي™ ولعملائها.
					</p>
					<p className="content-value">
						قد تقوم شركة صندوق الاستثمارات الكويتي™ بإبرام اتفاقات تعاون مع أطراف ثالثة غير منتسبة لتحسين خدمة العملاء وأداء وظائف اخرى مثل خدمة العملاء، بحوث سلوك المستهلك، أو الأنشطة المماثلة ذات الصلة
						بالعمل.
					</p>
				</div>
				<div className="policy-content">
					<p className="content-title">التسويق والاتصالات</p>
					<p className="content-value">
						قد تقوم شركة صندوق الاستثمارات الكويتي™ بالتواصل معكم إلكترونيا أو من خلال اي نوع من انواع الاتصالات في أي وقت لتزويدكك بمعلومات عن منتجاتها، والمواد التسويقية، للتدريب أو تقييم طلب الخدمة. يمكنكم
						التخلي عن هذا التطبيق في أي وقت من خلال النقر على الرابط "unsubscribe" (إلغاء الاشتراك)، المتاح في نهاية كل رسالة تصلكم على بريد إلكتروني، أو من خلال إخطار الموظف الذي قام الأتصال بكم .
					</p>
				</div>
			</div>
		);
	}
}

export default Policy;
