# andkis

مشروع صفحة هبوط لحساب إنستغرام **نيمف عباية | Nymph Abaya** (`@nymph.abaya_`).

> اسم المجلد المحلي: `andkis` — اسم الـ repo على GitHub: `mographiccode-cell/nymph-abaya`. الفارق تقني فقط ولا يؤثر على النشر.

## النشر

| العنصر | القيمة |
|---|---|
| المنصة | GitHub Pages |
| الفرع | `main` |
| المصدر | الجذر (`/`) |
| وضع البناء | `legacy` |
| Custom domain | `nymph-abaya.moubser.com` |
| الحالة | `built` · `public: true` |
| الرابط | <http://nymph-abaya.moubser.com/> |
| Fallback | <https://mographiccode-cell.github.io/nymph-abaya/> |

## بنية المشروع

```
andkis/
├── index.html              # الصفحة الرئيسية
├── styles.css              # التنسيق
├── script.js               # السكربتات
├── CNAME                   # النطاق المخصص لـ Pages
├── content/                # نصوص البراند ومنشورات إنستغرام
├── data/                   # JSON: منتجات، صور، بيانات الحساب
├── images/
│   ├── posts/              # صور المنشورات والريلز
│   └── profile/            # صورة البروفايل
├── account-research.json   # ملاحظات بحث الحساب
└── account-summary.md      # ملخص الحساب
```

## التطوير محلياً

المشروع ثابت (Static). للتجربة المحلية:

```bash
# أي خادم ثابت، مثلاً:
python -m http.server 8000
# ثم افتح http://localhost:8000
```

## ملاحظات

- اسم البراند داخل الصفحة (`Nymph Abaya`) ومعرّف إنستغرام (`@nymph.abaya_`) ثابطان ولا يُعدَّلان من هذا الـ repo.
- إعادة تسمية الـ repo على GitHub تتطلب صلاحية Admin على الحساب/المنظمة المالكة.
