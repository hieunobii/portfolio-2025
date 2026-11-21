'use strict';
(() => {
  const messages = {
    "Skip to content":  {
                            "vi":  "Đến nội dung",
                            "ja":  "本文へ移動"
                        },
    "Designer \u0026 developer":  {
                                      "vi":  "Nhà thiết kế \u0026 lập trình viên",
                                      "ja":  "デザイナー＆開発者"
                                  },
    "Hanoi, Vietnam":  {
                           "vi":  "Hà Nội, Việt Nam",
                           "ja":  "ベトナム・ハノイ"
                       },
    "EXPLORE":  {
                    "vi":  "KHÁM PHÁ",
                    "ja":  "メニュー"
                },
    "Overview":  {
                     "vi":  "Tổng quan",
                     "ja":  "ホーム"
                 },
    "Home":  {
                 "vi":  "Chính",
                 "ja":  "ホーム"
             },
    "About me":  {
                     "vi":  "Về tôi",
                     "ja":  "私について"
                 },
    "About":  {
                  "vi":  "Tôi",
                  "ja":  "紹介"
              },
    "Experience":  {
                       "vi":  "Kinh nghiệm",
                       "ja":  "経歴"
                   },
    "Resume":  {
                   "vi":  "CV",
                   "ja":  "経歴"
               },
    "Résumé":  {
                   "vi":  "Tải CV",
                   "ja":  "履歴書"
               },
    "Selected work":  {
                          "vi":  "Dự án nổi bật",
                          "ja":  "制作実績"
                      },
    "Work":  {
                 "vi":  "Dự án",
                 "ja":  "作品"
             },
    "Let\u0027s talk":  {
                            "vi":  "Kết nối",
                            "ja":  "お問い合わせ"
                        },
    "Contact":  {
                    "vi":  "Liên hệ",
                    "ja":  "連絡"
                },
    "Download résumé":  {
                            "vi":  "Tải hồ sơ CV",
                            "ja":  "履歴書をダウンロード"
                        },
    "Download CV":  {
                        "vi":  "Tải CV",
                        "ja":  "履歴書をダウンロード"
                    },
    "TAKE A CLOSER LOOK":  {
                               "vi":  "TÌM HIỂU THÊM",
                               "ja":  "もっと詳しく"
                           },
    "Hieudm. Crafted with intention.":  {
                                            "vi":  "Hieudm. Chỉn chu trong từng nét.",
                                            "ja":  "Hieudm. 細部に、意図を。"
                                        },
    "PORTFOLIO":  {
                      "vi":  "HỒ SƠ SÁNG TẠO",
                      "ja":  "ポートフォリオ"
                  },
    "Available for freelance":  {
                                    "vi":  "Sẵn sàng hợp tác",
                                    "ja":  "お仕事のご相談受付中"
                                },
    "INDEPENDENT DESIGNER \u0026 FRONTEND DEVELOPER":  {
                                                           "vi":  "THIẾT KẾ \u0026 LẬP TRÌNH GIAO DIỆN",
                                                           "ja":  "デザインとフロントエンド開発"
                                                       },
    "I\u0027m Hieu, a designer who codes. I turn complex ideas into intuitive digital experiences — from the first sketch to the final pixel.":  {
                                                                                                                                                     "vi":  "Tôi là Hiếu, một nhà thiết kế biết code. Tôi biến những ý tưởng phức tạp thành trải nghiệm số trực quan — từ nét phác đầu tiên đến từng pixel hoàn thiện.",
                                                                                                                                                     "ja":  "デザインもコードも手がけるヒエウです。複雑なアイデアを、最初のスケッチから最後のピクセルまで、直感的なデジタル体験へと形にします。"
                                                                                                                                                 },
    "Explore my work":  {
                            "vi":  "Khám phá dự án",
                            "ja":  "制作実績を見る"
                        },
    "Start a conversation":  {
                                 "vi":  "Bắt đầu trò chuyện",
                                 "ja":  "相談してみる"
                             },
    "Ui/Ux Design":  {
                         "vi":  "Thiết kế UI/UX",
                         "ja":  "UI/UXデザイン"
                     },
    "FRONTEND DEVELOPMENT":  {
                                 "vi":  "LẬP TRÌNH FRONTEND",
                                 "ja":  "フロントエンド開発"
                             },
    "CREATIVE DIRECTION":  {
                               "vi":  "ĐỊNH HƯỚNG SÁNG TẠO",
                               "ja":  "クリエイティブディレクション"
                           },
    "THE CREATIVE ENGINE":  {
                                "vi":  "LÕI SÁNG TẠO",
                                "ja":  "クリエイティブ・コア"
                            },
    "REALTIME / 3D":  {
                          "vi":  "THỜI GIAN THỰC / 3D",
                          "ja":  "リアルタイム / 3D"
                      },
    "DESIGN × ENGINEERING":  {
                                 "vi":  "THIẾT KẾ × CÔNG NGHỆ",
                                 "ja":  "デザイン × エンジニアリング"
                             },
    "01 / INTERACTIVE MATTER":  {
                                    "vi":  "01 / VẬT THỂ TƯƠNG TÁC",
                                    "ja":  "01 / インタラクティブ・マター"
                                },
    "Move to distort. Click to make waves.":  {
                                                  "vi":  "Di chuột để biến dạng. Nhấn để tạo sóng.",
                                                  "ja":  "動かして変形。クリックで波紋。"
                                              },
    "LIVE SYSTEM":  {
                        "vi":  "ĐANG HOẠT ĐỘNG",
                        "ja":  "システム稼働中"
                    },
    "Years of experience":  {
                                "vi":  "Năm kinh nghiệm",
                                "ja":  "年の経験"
                            },
    "Happy Clients":  {
                          "vi":  "Khách hàng hài lòng",
                          "ja":  "お客様からの信頼"
                      },
    "Selected projects":  {
                              "vi":  "Dự án nổi bật",
                              "ja":  "厳選プロジェクト"
                          },
    "FROM THE COLLECTION":  {
                                "vi":  "DỰ ÁN TIÊU BIỂU",
                                "ja":  "作品コレクション"
                            },
    "Ideas made tangible":  {
                                "vi":  "Biến ý tưởng thành hiện thực",
                                "ja":  "アイデアを、かたちに"
                            },
    "Connecting creative thinking with the craft of development.":  {
                                                                        "vi":  "Kết nối tư duy sáng tạo với kỹ năng lập trình.",
                                                                        "ja":  "クリエイティブな思考と、開発の技術をつなぎます。"
                                                                    },
    "Hello, dear recruiter. My name is Hieu. I have experience as a graphics designer, the thinking ability of a UI/UX designer, the skills to code pixel-perfect interfaces as a frontend developer, and I have been passionately working in this field for 5 years. I hope the recruiter can contact me, my contact information is clearly stated in the \"Contact\" section.":  {
                                                                                                                                                                                                                                                                                                                                                                                       "vi":  "Xin chào, tôi là Hiếu. Tôi có kinh nghiệm thiết kế đồ họa, tư duy thiết kế UI/UX và kỹ năng lập trình giao diện chính xác đến từng pixel. Tôi đã làm việc đầy đam mê trong lĩnh vực này suốt 5 năm. Tôi mong được kết nối với nhà tuyển dụng; thông tin của tôi được trình bày đầy đủ trong mục Liên hệ.",
                                                                                                                                                                                                                                                                                                                                                                                       "ja":  "はじめまして、ヒエウです。グラフィックデザインの経験、UI/UXデザイナーとしての思考力、そしてピクセル単位で正確な画面を実装するフロントエンド開発の技術を持ち、この分野に5年間情熱を注いできました。採用担当の皆さまからのご連絡をお待ちしています。詳細は「お問い合わせ」をご覧ください。"
                                                                                                                                                                                                                                                                                                                                                                                   },
    "Age":  {
                "vi":  "Năm sinh",
                "ja":  "生年"
            },
    "Born in 1996":  {
                         "vi":  "Sinh năm 1996",
                         "ja":  "1996年生まれ"
                     },
    "Country":  {
                    "vi":  "Quốc gia",
                    "ja":  "所在地"
                },
    "Vietnam, Hanoi":  {
                           "vi":  "Việt Nam, Hà Nội",
                           "ja":  "ベトナム・ハノイ"
                       },
    "Address":  {
                    "vi":  "Địa chỉ",
                    "ja":  "住所"
                },
    "99/110 Dinh Cong Ha Street, Hoang Mai District":  {
                                                           "vi":  "99/110 Định Công Hạ, quận Hoàng Mai",
                                                           "ja":  "ホアンマイ区ディンコンハ通り99/110"
                                                       },
    "E-mail":  {
                   "vi":  "Email",
                   "ja":  "メール"
               },
    "Phone":  {
                  "vi":  "Điện thoại",
                  "ja":  "電話"
              },
    "What I Do":  {
                      "vi":  "Chuyên môn của tôi",
                      "ja":  "できること"
                  },
    "Graphic Design":  {
                           "vi":  "Thiết kế đồ họa",
                           "ja":  "グラフィックデザイン"
                       },
    "Design 2D e-commerce banners, design brand logos, handle and edit images, product images at a proficient level, and create short graphic advertisement videos for digital platforms.":  {
                                                                                                                                                                                                 "vi":  "Thiết kế banner thương mại điện tử, logo thương hiệu; xử lý, chỉnh sửa ảnh và hình sản phẩm chuyên nghiệp; sáng tạo video quảng cáo đồ họa ngắn cho các nền tảng số.",
                                                                                                                                                                                                 "ja":  "EC向けの2Dバナーやブランドロゴのデザイン、商品写真の加工・編集、デジタル媒体向けの短いモーショングラフィック広告を制作します。"
                                                                                                                                                                                             },
    "Design websites, landing pages, and apps using tools like Figma or Adobe XD, with a modern design mindset, always prioritizing user experience when creating designs.":  {
                                                                                                                                                                                  "vi":  "Thiết kế website, landing page và ứng dụng bằng Figma, Adobe XD với tư duy hiện đại, luôn đặt trải nghiệm người dùng làm trọng tâm.",
                                                                                                                                                                                  "ja":  "FigmaやAdobe XDを使い、ウェブサイト、ランディングページ、アプリを設計します。現代的なデザイン思考で、常にユーザー体験を優先します。"
                                                                                                                                                                              },
    "Landing Page Design":  {
                                "vi":  "Thiết kế landing page",
                                "ja":  "LPデザイン"
                            },
    "Build layout landing pages using various platforms such as: Ladipage, 1Landing, Wordpress Flatsome/Elementor, as well as coding pure responsive interfaces.":  {
                                                                                                                                                                        "vi":  "Xây dựng landing page trên Ladipage, 1Landing, WordPress Flatsome/Elementor, đồng thời lập trình giao diện responsive bằng code thuần.",
                                                                                                                                                                        "ja":  "Ladipage、1Landing、WordPressのFlatsomeやElementorでLPを構築し、レスポンシブな画面をコードから実装することもできます。"
                                                                                                                                                                    },
    "Frontend Developer":  {
                               "vi":  "Lập trình frontend",
                               "ja":  "フロントエンド開発"
                           },
    "Design from service models and introductions to sales models according to requirements, ensuring pixel-perfect accuracy compared to the design draft. Primary languages used include HTML, CSS, JavaScript, and jQuery.":  {
                                                                                                                                                                                                                                    "vi":  "Xây dựng giao diện giới thiệu dịch vụ và bán hàng theo yêu cầu, đảm bảo độ chính xác cao so với bản thiết kế. Công nghệ chính gồm HTML, CSS, JavaScript và jQuery.",
                                                                                                                                                                                                                                    "ja":  "サービス紹介から販売向けの画面まで、要件に合わせて実装します。デザイン原稿に忠実な仕上がりを追求し、主にHTML、CSS、JavaScript、jQueryを使用します。"
                                                                                                                                                                                                                                },
    "Testimonials":  {
                         "vi":  "Đánh giá từ đồng nghiệp",
                         "ja":  "一緒に働いた方の声"
                     },
    "\"Hieu is always ready to take on tasks beyond his position when necessary, consistently delivering work that exceeds expectations.\"":  {
                                                                                                                                                  "vi":  "“Hiếu luôn sẵn sàng đảm nhận công việc ngoài phạm vi vị trí khi cần thiết, và liên tục mang lại kết quả vượt kỳ vọng.”",
                                                                                                                                                  "ja":  "「ヒエウさんは必要なときには担当範囲を超える仕事にも進んで取り組み、期待以上の成果を届けてくれます。」"
                                                                                                                                              },
    "Project Manager":  {
                            "vi":  "Quản lý dự án",
                            "ja":  "プロジェクトマネージャー"
                        },
    "\"Hieu works very hard and takes the initiative to learn new knowledge outside of working hours. I highly appreciate Hieu\u0027s creativity.\"":  {
                                                                                                                                                           "vi":  "“Hiếu làm việc rất chăm chỉ và chủ động học hỏi kiến thức mới ngoài giờ làm. Tôi đánh giá cao sự sáng tạo của Hiếu.”",
                                                                                                                                                           "ja":  "「ヒエウさんは勤勉で、業務時間外にも自ら新しい知識を学んでいます。その創造性を高く評価しています。」"
                                                                                                                                                       },
    "Project Leader":  {
                           "vi":  "Trưởng nhóm dự án",
                           "ja":  "プロジェクトリーダー"
                       },
    "\"Exhibits a professional work attitude, does not avoid responsibility, and is always willing to assist and share experience with colleagues.\"":  {
                                                                                                                                                            "vi":  "“Thái độ làm việc chuyên nghiệp, không né tránh trách nhiệm, luôn sẵn lòng hỗ trợ và chia sẻ kinh nghiệm với đồng nghiệp.”",
                                                                                                                                                            "ja":  "「プロフェッショナルな姿勢で責任を持って仕事に取り組み、同僚へのサポートや経験の共有も惜しみません。」"
                                                                                                                                                        },
    "Company CEO":  {
                        "vi":  "Giám đốc điều hành",
                        "ja":  "代表取締役"
                    },
    "Clients":  {
                    "vi":  "Khách hàng",
                    "ja":  "クライアント"
                },
    "Fun Facts":  {
                      "vi":  "Những con số nổi bật",
                      "ja":  "数字で見る実績"
                  },
    "Experience Years":  {
                             "vi":  "Năm kinh nghiệm",
                             "ja":  "年の経験"
                         },
    "Awards Won":  {
                       "vi":  "Giải thưởng",
                       "ja":  "受賞歴"
                   },
    "The journey, the skills, and the tools behind my work.":  {
                                                                   "vi":  "Hành trình, kỹ năng và công cụ làm nên những sản phẩm của tôi.",
                                                                   "ja":  "これまでの歩みと、制作を支えるスキルやツール。"
                                                               },
    "Download full résumé":  {
                                 "vi":  "Tải CV đầy đủ",
                                 "ja":  "履歴書をダウンロード"
                             },
    "Education":  {
                      "vi":  "Học vấn",
                      "ja":  "学歴"
                  },
    "Dong Da High School - Hanoi":  {
                                        "vi":  "THPT Đống Đa — Hà Nội",
                                        "ja":  "ハノイ・ドンダー高校"
                                    },
    "Student":  {
                    "vi":  "Học sinh",
                    "ja":  "在学"
                },
    "An excellent student in computer science and mathematics, who has won awards in the city\u0027s math competition.":  {
                                                                                                                              "vi":  "Học sinh giỏi tin học và toán, từng đạt giải trong kỳ thi toán cấp thành phố.",
                                                                                                                              "ja":  "情報科学と数学を得意とし、市の数学コンテストで受賞しました。"
                                                                                                                          },
    "Hanoi Open University":  {
                                  "vi":  "Đại học Mở Hà Nội",
                                  "ja":  "ハノイ公開大学"
                              },
    "Finance Bachelor":  {
                             "vi":  "Cử nhân tài chính",
                             "ja":  "財務学学士"
                         },
    "A distinguished student actively participating in scientific research programs and voluntary blood donation activities.":  {
                                                                                                                                    "vi":  "Sinh viên tiêu biểu, tích cực tham gia nghiên cứu khoa học và các hoạt động hiến máu tình nguyện.",
                                                                                                                                    "ja":  "学業に励みながら、研究活動や献血ボランティアにも積極的に参加しました。"
                                                                                                                                },
    "7/2023 - Current":  {
                             "vi":  "07/2023 – Hiện tại",
                             "ja":  "2023年7月 – 現在"
                         },
    "Landing, Frontend Developer":  {
                                        "vi":  "Lập trình landing page \u0026 frontend",
                                        "ja":  "LP・フロントエンド開発"
                                    },
    "Design a theme repository of interfaces for websites and landing pages, and also undertook projects to customize website interfaces.":  {
                                                                                                                                                 "vi":  "Xây dựng kho giao diện mẫu cho website, landing page và thực hiện các dự án tùy chỉnh giao diện website.",
                                                                                                                                                 "ja":  "ウェブサイトやLP用のテンプレートライブラリを制作し、ウェブサイトの画面カスタマイズ案件も担当しました。"
                                                                                                                                             },
    "Design 2D, Frontend Dev":  {
                                    "vi":  "Thiết kế 2D \u0026 lập trình frontend",
                                    "ja":  "2Dデザイン・フロントエンド開発"
                                },
    "Design campaign banners, code interfaces by using Html, Css, Javascript for both my company and its clients.":  {
                                                                                                                         "vi":  "Thiết kế banner chiến dịch, lập trình giao diện bằng HTML, CSS, JavaScript cho công ty và khách hàng.",
                                                                                                                         "ja":  "自社とクライアント向けにキャンペーンバナーを制作し、HTML、CSS、JavaScriptで画面を実装しました。"
                                                                                                                     },
    "Landing, Web Design":  {
                                "vi":  "Thiết kế landing page \u0026 website",
                                "ja":  "LP・ウェブデザイン"
                            },
    "Design drag-and-drop landing pages and layouts for websites and landing pages. Additionally, I create campaign banners for clients.":  {
                                                                                                                                                "vi":  "Thiết kế landing page kéo thả, bố cục website và landing page; đồng thời sáng tạo banner chiến dịch cho khách hàng.",
                                                                                                                                                "ja":  "ノーコードツールを使ったLP制作やウェブサイトのレイアウト設計、クライアント向けのキャンペーンバナー制作を担当しました。"
                                                                                                                                            },
    "Graphic, Ui Designer":  {
                                 "vi":  "Thiết kế đồ họa \u0026 UI",
                                 "ja":  "グラフィック・UIデザイン"
                             },
    "Design brand logos, campaign banners, landing page interfaces, and website interfaces across various digital platforms.":  {
                                                                                                                                    "vi":  "Thiết kế logo thương hiệu, banner chiến dịch, giao diện landing page và website trên nhiều nền tảng số.",
                                                                                                                                    "ja":  "さまざまなデジタル媒体で、ブランドロゴ、キャンペーンバナー、LP、ウェブサイトの画面をデザインしました。"
                                                                                                                                },
    "Design Skills":  {
                          "vi":  "Kỹ năng thiết kế",
                          "ja":  "デザインスキル"
                      },
    "Logo Design":  {
                        "vi":  "Thiết kế logo",
                        "ja":  "ロゴデザイン"
                    },
    "Campaign Video":  {
                           "vi":  "Video quảng cáo",
                           "ja":  "広告動画制作"
                       },
    "Coding Skills":  {
                          "vi":  "Kỹ năng lập trình",
                          "ja":  "開発スキル"
                      },
    "Knowledges":  {
                       "vi":  "Công cụ \u0026 kiến thức",
                       "ja":  "ツールと知識"
                   },
    "Setup Domain":  {
                         "vi":  "Cấu hình tên miền",
                         "ja":  "ドメイン設定"
                     },
    "Setup Hosting":  {
                          "vi":  "Cấu hình hosting",
                          "ja":  "ホスティング設定"
                      },
    "Build Mind Map":  {
                           "vi":  "Xây dựng sơ đồ tư duy",
                           "ja":  "マインドマップ作成"
                       },
    "Certificates":  {
                         "vi":  "Chứng chỉ \u0026 bằng cấp",
                         "ja":  "資格・学位"
                     },
    "International English B2 Certificate":  {
                                                 "vi":  "Chứng chỉ tiếng Anh quốc tế B2",
                                                 "ja":  "国際英語B2認定"
                                             },
    "19 April 2018":  {
                          "vi":  "19 tháng 4 năm 2018",
                          "ja":  "2018年4月19日"
                      },
    "Bachelor\u0027s Degree in Corporate Finance":  {
                                                        "vi":  "Bằng cử nhân tài chính doanh nghiệp",
                                                        "ja":  "企業財務学学士号"
                                                    },
    "15 September 2019":  {
                              "vi":  "15 tháng 9 năm 2019",
                              "ja":  "2019年9月15日"
                          },
    "A collection of websites, landing pages, and visual identities. Explore a category or open a project for a closer look.":  {
                                                                                                                                    "vi":  "Bộ sưu tập website, landing page và thiết kế đồ họa. Chọn danh mục hoặc mở một dự án để xem chi tiết.",
                                                                                                                                    "ja":  "ウェブサイト、LP、ビジュアルデザインのコレクションです。カテゴリーを選ぶか、作品を開いて詳しくご覧ください。"
                                                                                                                                },
    "All":  {
                "vi":  "Tất cả",
                "ja":  "すべて"
            },
    "Graphics":  {
                     "vi":  "Đồ họa",
                     "ja":  "グラフィック"
                 },
    "Landing Page":  {
                         "vi":  "Landing page",
                         "ja":  "LP"
                     },
    "Ui/Ux":  {
                  "vi":  "UI/UX",
                  "ja":  "UI/UX"
              },
    "Website":  {
                    "vi":  "Website",
                    "ja":  "ウェブサイト"
                },
    "Ui/Ux + Website":  {
                            "vi":  "UI/UX + Website",
                            "ja":  "UI/UX・ウェブサイト"
                        },
    "Ui/Ux + Website + Graphics":  {
                                       "vi":  "UI/UX + Website + Đồ họa",
                                       "ja":  "UI/UX・ウェブ・グラフィック"
                                   },
    "Landing Page + Graphics":  {
                                    "vi":  "Landing page + Đồ họa",
                                    "ja":  "LP・グラフィック"
                                },
    "Website Omnidigital":  {
                                "vi":  "Website Omnidigital",
                                "ja":  "Omnidigital ウェブサイト"
                            },
    "Landing Page Ecomcare":  {
                                  "vi":  "Landing page Ecomcare",
                                  "ja":  "Ecomcare LP"
                              },
    "Banner Shopee":  {
                          "vi":  "Banner Shopee",
                          "ja":  "Shopee バナー"
                      },
    "Website Chichifood":  {
                               "vi":  "Website Chichifood",
                               "ja":  "Chichifood ウェブサイト"
                           },
    "Website KPIM Academy":  {
                                 "vi":  "Website KPIM Academy",
                                 "ja":  "KPIM Academy ウェブサイト"
                             },
    "Landing Page Nhanh.vn":  {
                                  "vi":  "Landing page Nhanh.vn",
                                  "ja":  "Nhanh.vn LP"
                              },
    "Website Computer Shop":  {
                                  "vi":  "Website cửa hàng máy tính",
                                  "ja":  "PCショップ ウェブサイト"
                              },
    "Website Lebro":  {
                          "vi":  "Website Lebro",
                          "ja":  "Lebro ウェブサイト"
                      },
    "Du lich Ninh Binh":  {
                              "vi":  "Du lịch Ninh Bình",
                              "ja":  "ニンビン観光"
                          },
    "05 / CONTACT":  {
                         "vi":  "05 / LIÊN HỆ",
                         "ja":  "05 / お問い合わせ"
                     },
    "Have an idea, a project, or a role in mind? I\u0027d love to hear about it.":  {
                                                                                        "vi":  "Bạn đang ấp ủ một ý tưởng, dự án hay cơ hội công việc? Tôi rất mong được lắng nghe.",
                                                                                        "ja":  "アイデアやプロジェクト、お仕事のお話など、ぜひお聞かせください。"
                                                                                    },
    "Let\u0027s make something":  {
                                      "vi":  "Cùng tạo nên những điều",
                                      "ja":  "一緒に、"
                                  },
    "worth putting out there.":  {
                                     "vi":  "thật đáng tự hào.",
                                     "ja":  "世に届けたいものを。"
                                 },
    "BASED IN":  {
                     "vi":  "ĐANG Ở",
                     "ja":  "拠点"
                 },
    "Hanoi City, Vietnam":  {
                                "vi":  "Hà Nội, Việt Nam",
                                "ja":  "ベトナム・ハノイ"
                            },
    "99/110 Dinh Cong Ha Street,":  {
                                        "vi":  "99/110 Định Công Hạ,",
                                        "ja":  "ディンコンハ通り99/110"
                                    },
    "Hoang Mai District":  {
                               "vi":  "Quận Hoàng Mai",
                               "ja":  "ホアンマイ区"
                           },
    "View on Google Maps":  {
                                "vi":  "Xem trên Google Maps",
                                "ja":  "Googleマップで見る"
                            },
    "Prefer another channel? Find me on":  {
                                               "vi":  "Bạn muốn kết nối nhanh? Nhắn tôi qua",
                                               "ja":  "別の連絡方法をご希望ですか？"
                                           },
    "Tell me about your project":  {
                                       "vi":  "Chia sẻ về dự án của bạn",
                                       "ja":  "プロジェクトについて"
                                   },
    "Your name":  {
                      "vi":  "Tên của bạn",
                      "ja":  "お名前"
                  },
    "Email address":  {
                          "vi":  "Địa chỉ email",
                          "ja":  "メールアドレス"
                      },
    "Phone number":  {
                         "vi":  "Số điện thoại",
                         "ja":  "電話番号"
                     },
    "(optional)":  {
                       "vi":  "(không bắt buộc)",
                       "ja":  "（任意）"
                   },
    "What\u0027s on your mind?":  {
                                      "vi":  "Bạn muốn chia sẻ điều gì?",
                                      "ja":  "ご相談内容"
                                  },
    "Leave this empty":  {
                             "vi":  "Để trống ô này",
                             "ja":  "この欄は空欄にしてください"
                         },
    "Your details are used to reply to your enquiry. Messages are processed by FormSubmit.":  {
                                                                                                  "vi":  "Thông tin chỉ dùng để phản hồi yêu cầu của bạn. Tin nhắn được xử lý qua FormSubmit.",
                                                                                                  "ja":  "ご入力いただいた情報は返信のために使用します。メッセージはFormSubmitを通じて処理されます。"
                                                                                              },
    "Send message":  {
                         "vi":  "Gửi tin nhắn",
                         "ja":  "メッセージを送る"
                     },
    "INDEPENDENT DESIGNER \u0026 DEVELOPER":  {
                                                  "vi":  "THIẾT KẾ \u0026 PHÁT TRIỂN ĐỘC LẬP",
                                                  "ja":  "独立系デザイナー＆開発者"
                                              },
    "Made with care. Built to connect.":  {
                                              "vi":  "Chỉn chu trong thiết kế. Kết nối qua trải nghiệm.",
                                              "ja":  "丁寧につくり、体験でつなぐ。"
                                          },
    "PROJECT PREVIEW":  {
                            "vi":  "CHI TIẾT DỰ ÁN",
                            "ja":  "作品プレビュー"
                        },
    "Open full image":  {
                            "vi":  "Mở ảnh đầy đủ",
                            "ja":  "画像を新しいタブで開く"
                        },
    "Profile":  {
                    "vi":  "Hồ sơ cá nhân",
                    "ja":  "プロフィール"
                },
    "Hieudm home":  {
                        "vi":  "Trang chủ Hieudm",
                        "ja":  "Hieudm ホーム"
                    },
    "Portfolio sections":  {
                               "vi":  "Điều hướng portfolio",
                               "ja":  "ポートフォリオのナビゲーション"
                           },
    "Language":  {
                     "vi":  "Ngôn ngữ",
                     "ja":  "言語"
                 },
    "Interactive three-dimensional particle sphere":  {
                                                          "vi":  "Quả cầu công nghệ 3D tương tác",
                                                          "ja":  "インタラクティブな3Dスフィア"
                                                      },
    "A luminous 3D technology sphere. Move your pointer to deform it; click or press Enter to send a ripple.":  {
                                                                                                                    "vi":  "Quả cầu công nghệ 3D phát sáng. Di con trỏ để biến dạng; nhấn chuột hoặc Enter để tạo sóng.",
                                                                                                                    "ja":  "光る3Dテクノロジースフィア。ポインターで変形し、クリックまたはEnterキーで波紋を送れます。"
                                                                                                                },
    "Portrait of Hieu Minh Duong":  {
                                        "vi":  "Ảnh chân dung Dương Minh Hiếu",
                                        "ja":  "ヒエウ・ミン・ズオンの写真"
                                    },
    "Close project preview":  {
                                  "vi":  "Đóng chi tiết dự án",
                                  "ja":  "プレビューを閉じる"
                              },
    "How should I call you?":  {
                                   "vi":  "Tôi nên gọi bạn là gì?",
                                   "ja":  "お名前を教えてください"
                               },
    "A little about your project, timeline, and what you need…":  {
                                                                      "vi":  "Đôi nét về dự án, thời gian và điều bạn cần…",
                                                                      "ja":  "プロジェクトの概要、スケジュール、ご希望など…"
                                                                  },
    "Sending…":  {
                     "vi":  "Đang gửi…",
                     "ja":  "送信中…"
                 },
    "Sending your message securely…":  {
                                           "vi":  "Đang gửi tin nhắn của bạn…",
                                           "ja":  "メッセージを送信しています…"
                                       },
    "The contact service is awaiting inbox activation. Please email me directly at hieunobii2809@gmail.com for now.":  {
                                                                                                                           "vi":  "Dịch vụ liên hệ đang chờ xác minh hộp thư. Vui lòng gửi email trực tiếp tới hieunobii2809@gmail.com.",
                                                                                                                           "ja":  "お問い合わせサービスはメール認証待ちです。hieunobii2809@gmail.comへ直接ご連絡ください。"
                                                                                                                       },
    "Your enquiry was accepted. Thank you! If you need an urgent reply, please contact me directly by email or phone.":  {
                                                                                                                             "vi":  "Tin nhắn của bạn đã được tiếp nhận. Cảm ơn bạn! Nếu cần phản hồi gấp, vui lòng liên hệ trực tiếp qua email hoặc điện thoại.",
                                                                                                                             "ja":  "メッセージを受け付けました。ありがとうございます。お急ぎの場合は、メールまたはお電話で直接ご連絡ください。"
                                                                                                                         },
    "Your message could not be confirmed. Your draft is still here. Please retry, or email hieunobii2809@gmail.com directly.":  {
                                                                                                                                    "vi":  "Chưa thể xác nhận tin nhắn đã được gửi. Nội dung vẫn được giữ lại. Vui lòng thử lại hoặc gửi email tới hieunobii2809@gmail.com.",
                                                                                                                                    "ja":  "送信を確認できませんでした。入力内容は保持されています。再度お試しいただくか、hieunobii2809@gmail.comへ直接ご連絡ください。"
                                                                                                                                },
    "Please complete this field.":  {
                                        "vi":  "Vui lòng điền thông tin này.",
                                        "ja":  "この項目を入力してください。"
                                    },
    "Please enter a valid email address.":  {
                                                "vi":  "Vui lòng nhập địa chỉ email hợp lệ.",
                                                "ja":  "有効なメールアドレスを入力してください。"
                                            },
    "Please write at least 10 characters.":  {
                                                 "vi":  "Vui lòng nhập ít nhất 10 ký tự.",
                                                 "ja":  "10文字以上で入力してください。"
                                             },
    "{count} projects · {category}":  {
                                          "vi":  "{count} dự án · {category}",
                                          "ja":  "{count}件の作品 · {category}"
                                      },
    "Design meets development":  {
                                     "vi":  "Thiết kế kết hợp lập trình",
                                     "ja":  "デザインと開発の交点"
                                 },
    "View {title}":  {
                         "vi":  "Xem dự án {title}",
                         "ja":  "{title}を見る"
                     },
    "{title} — design preview":  {
                                     "vi":  "{title} — xem trước thiết kế",
                                     "ja":  "{title} — デザインプレビュー"
                                 },
    "{title} — full design":  {
                                  "vi":  "{title} — thiết kế đầy đủ",
                                  "ja":  "{title} — デザイン全体"
                              }
};

  messages['Omnidigital website preview']={vi:'Xem trước website Omnidigital',ja:'Omnidigitalウェブサイトのプレビュー'};
  messages['Press Esc to close']={vi:'Nhấn Esc để đóng',ja:'Escキーで閉じる'};
  messages['Loading preview…']={vi:'Đang tải thiết kế…',ja:'プレビューを読み込み中…'};
  messages['Preview could not be loaded. Open the full image instead.']={vi:'Chưa tải được ảnh. Bạn có thể mở ảnh đầy đủ bên dưới.',ja:'画像を読み込めませんでした。下のリンクから画像を開いてください。'};
  messages['Drag to rotate. Click to make waves.']={vi:'Kéo để xoay. Nhấn để tạo sóng.',ja:'ドラッグで回転。クリックで波紋。'};
  messages['A luminous 3D technology sphere. Drag to rotate, use arrow keys to turn, or click or press Enter to send a ripple.']={vi:'Quả cầu công nghệ 3D phát sáng. Kéo hoặc dùng phím mũi tên để xoay; nhấn chuột hoặc Enter để tạo sóng.',ja:'光る3Dスフィア。ドラッグや矢印キーで回転し、クリックまたはEnterキーで波紋を送れます。'};
  const folded = new Map(Object.entries(messages).map(([key,value])=>[key.toLowerCase(),value]));
  const rich = {
    'hero.title': {
      en: '<span>Design beyond</span><em>the ordinary.</em><span>Built for people.</span>',
      vi: '<span>Vượt giới hạn.</span><em>Chạm tương lai.</em><span>Vì người dùng.</span>',
      ja: '<span>デザインで、</span><em>常識の先へ。</em><span>人のためにつくる。</span>'
    },
    'about.title': {en:'A little <em>about me.</em>',vi:'Đôi nét <em>về tôi.</em>',ja:'私について<em>知る。</em>'},
    'resume.title': {en:'Experience <em>& expertise.</em>',vi:'Kinh nghiệm <em>& chuyên môn.</em>',ja:'これまでの歩みと<em>スキル。</em>'},
    'work.title': {en:'Selected <em>work.</em>',vi:'Dự án <em>nổi bật.</em>',ja:'厳選した<em>制作実績。</em>'},
    'contact.title': {en:'Good work starts<br>with a <em>conversation.</em>',vi:'Điều tuyệt vời bắt đầu<br>từ một <em>cuộc trò chuyện.</em>',ja:'良い仕事は、<br><em>対話</em>から始まる。'}
  };
  const normalize = text => text.replace(/\s+/g,' ').trim();
  document.querySelectorAll('.portfolio-grid .name').forEach(element=>element.dataset.projectTitle=normalize(element.textContent));
  document.querySelectorAll('.skill h4').forEach(element=>element.dataset.sourceLabel=normalize(element.textContent));
  let language = 'en';
  const bindings = [], attributes = [];
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node=walker.currentNode;
    if (!node.parentElement || node.parentElement.closest('script,style,svg,code,noscript,option,.language-menu,[data-language-label],[data-i18n],[data-i18n-html]')) continue;
    const key=normalize(node.textContent);
    if(key) bindings.push({node,key,prefix:node.textContent.match(/^\s*/)[0],suffix:node.textContent.match(/\s*$/)[0]});
  }
  document.querySelectorAll('[aria-label],[placeholder],img[alt]').forEach(element=>{
    if(element.matches('.lightbox'))return;
    ['aria-label','placeholder','alt'].forEach(name=>{
      if(!element.hasAttribute(name) || (name==='alt' && element.closest('.portfolio-grid,.testimonial')))return;
      const key=element.getAttribute(name);if(key)attributes.push({element,name,key});
    });
  });
  function t(key,variables={}) {
    const message=language==='en'?key:((messages[key]||folded.get(key.toLowerCase()))?.[language]??key);
    return message.replace(/\{(\w+)\}/g,(match,name)=>variables[name]??match);
  }
  function apply(value, persist=true) {
    language=['en','vi','ja'].includes(value)?value:'en';
    document.documentElement.lang=language;
    const descriptions={
      en:'Hieu Minh Duong — UI/UX designer and frontend developer in Hanoi. Explore selected websites, landing pages and graphic design work.',
      vi:'Dương Minh Hiếu — Nhà thiết kế UI/UX và lập trình viên frontend tại Hà Nội. Khám phá các dự án website, landing page và thiết kế đồ họa.',
      ja:'ヒエウ・ミン・ズオン — ハノイのUI/UXデザイナー・フロントエンド開発者。ウェブサイト、LP、グラフィックデザインの制作実績をご紹介します。'
    };
    document.querySelectorAll('meta[name="description"],meta[property="og:description"]').forEach(meta=>meta.content=descriptions[language]);
    bindings.forEach(({node,key,prefix,suffix})=>{if(node.isConnected)node.textContent=prefix+t(key)+suffix;});
    attributes.forEach(({element,name,key})=>element.setAttribute(name,t(key)));
    document.querySelectorAll('[data-i18n]').forEach(element=>element.textContent=t(element.dataset.i18n));
    document.querySelectorAll('[data-i18n-html]').forEach(element=>{element.innerHTML=rich[element.dataset.i18nHtml][language];});
    document.querySelector('#language-select').value=language;
    const tab=document.querySelector('[role=tab][aria-selected=true]');
    if(tab){document.querySelector('#current-view').textContent=tab.getAttribute('aria-label');document.title=`${tab.getAttribute('aria-label')} — Hieu Minh Duong`;}
    if(persist){try{localStorage.setItem('hieudm-language',language);}catch{/* Private browsing can disable storage. */}}
    document.dispatchEvent(new CustomEvent('portfolio:language',{detail:{language}}));
  }
  const unchanged=new Set(['hieu','dm','Hieu Minh Duong','GMT+7','Facebook','Instagram','Zalo','hieunobii2809@gmail.com','Vinh Nguyen','Ngoc Vu','Bao Hoang','Ecomcare','Ezisolutions','Omnidigital','Nhanh.vn (Momo)','HTML','CSS','Javascript','Jquery','Git/Github','Photoshop','Illustrator','Canva','Figma','Adobe XD','VS Code','Webstorm','Wordpress','Bootstrap','Aurasia Travel','isoCMS','Quoc Anh Pharmacy','you@company.com','Hieudm','Logo']);
  function audit(){
    const keys=[...bindings.map(binding=>binding.key),...attributes.map(attribute=>attribute.key),...[...document.querySelectorAll('[data-i18n]')].map(element=>element.dataset.i18n)];
    return [...new Set(keys.filter(key=>/[A-Za-z]/.test(key)&&!messages[key]&&!folded.has(key.toLowerCase())&&!unchanged.has(key)))];
  }
  window.PortfolioI18n={t,apply,audit,get language(){return language;}};
  document.querySelector('#language-select').addEventListener('change',event=>apply(event.target.value));
  let saved='en';try{saved=localStorage.getItem('hieudm-language')||'en';}catch{/* Use English on first visit. */}
  apply(saved,false);
})();
