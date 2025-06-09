"use client";

import React, { useState, useEffect, useRef } from 'react'
import "../../styles/Header.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ChevronDown, Users, Handshake, PhoneCall } from 'lucide-react';

const Header = () => {
    
    const[userInfo, setUserInfo] = useState(null); 
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState({
        solutions: false,
        company: false,
        platform: false,
        features: false
    });
    const solutionsRef = useRef(null);
    const companyRef = useRef(null);
    const router = useRouter();
    

    useEffect(() => {
        fetchUserData();
    }, []);
    
    const fetchUserData = async () => {
        setFetchLoading(true);
    try {
      const authResponse = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      if (!authResponse.ok) {
        return;
      }
      
      const authData = await authResponse.json();
      const userEmail = authData.email;
      setIsAuth(true);
      
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/users?email=${encodeURIComponent(userEmail)}&t=${timestamp}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      const data = await response.json();
      

      if (data.success) {
        setUserInfo(data.user);
      } 
    } catch (error) {
      console.error('❌ Error fetching user:', error);
    } finally {
      setFetchLoading(false);
    }
  };
    const handleMenu = () => {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        setMobileActiveDropdown({
                solutions: false,
                company: false,
                platform: false,
                features: false
            });
    }
    
    const handleButtonMenu = () => {
        router.push("/contact");
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        setMobileActiveDropdown({
                solutions: false,
                company: false,
                platform: false,
                features: false
            });
    }
    const toggleSolutions = () => {
        setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions');
    };
    
    const toggleCompany = () => {
        setActiveDropdown(activeDropdown === 'company' ? null : 'company');
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setMobileActiveDropdown({
                solutions: false,
                company: false,
                platform: false,
                features: false
            });
        }
    };

    const toggleMobileDropdown = (dropdown) => {
        setMobileActiveDropdown(prev => ({
            ...prev,
            [dropdown]: !prev[dropdown],
            ...(dropdown === 'solutions' && !prev[dropdown] ? {} : 
                dropdown === 'solutions' ? { platform: false, features: false } : {})
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                solutionsRef.current && 
                !solutionsRef.current.contains(event.target) &&
                companyRef.current && 
                !companyRef.current.contains(event.target)
            ) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

   
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 940) {
                setMobileMenuOpen(false);
                setMobileActiveDropdown({
                    solutions: false,
                    company: false,
                    platform: false,
                    features: false
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="outer-nav-container">
            <div className="inner-nav-container">
                <div className="nav-wrap">
                    <div className="brand-logo">
                        <Link href="/"><Image src = "/images/HomePageImg/growmax_logo.png" className="logo-header" width={150} height={50} alt="Growmax Logo in Header"/></Link>
                    </div>
                    
                    
                    <nav className="nav-bar desktop-nav">
                        <div className="nav-bar-ele-solutions" ref={solutionsRef}>
                            <div className="solutions-select" onClick={toggleSolutions}>
                                <p>Solutions</p>
                                <ChevronDown className={`dropdown-arrow ${activeDropdown === 'solutions' ? 'rotated' : ''}`}/>
                            </div>
                            <div className={`solutions-div-container ${activeDropdown === 'solutions' ? 'visible' : ''}`}>
                                <div className="solutions-wrap">
                                    <div className="platform">
                                        <p>Platform</p>
                                        <Link href="/sales-rep-app" onClick={handleMenu}>
                                        <div className="option-1">
                                            <h3>Sales Representative & Self-Service App for Wholesalers and Distributors</h3>
                                            <p>Empower your sales team to recommend the right products to customers and enable your wholesale and distribution partners to conveniently place orders anytime through a seamless self-service experience.</p>
                                        </div>
                                        </Link>
                                        <Link href="/b2b-commerce-cloud" onClick={handleMenu}>
                                        <div className="option-2">
                                            <h3>Enterprise Commerce Cloud for Large Organizations</h3>
                                            <p>Deliver a seamless customer experience by integrating your portal with SAP. Provide your customers with 100% visibility—no more delays in submitting quotations, accessing order statuses, or tracking support tickets. Everything they need, all in one centralized portal.</p>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="features">
                                        <p>Features</p>
                                        <ul>
                                            <Link href="/quote-management" onClick={handleMenu}><li>Quotation Management</li></Link>
                                            <Link href="/order-management" onClick={handleMenu}><li>Order Management</li></Link>
                                            <Link href="/sales-rep-app" onClick={handleMenu}><li>Sales Representative Application</li></Link>
                                            <Link href="/product-catalog-management" onClick={handleMenu}><li>Product Catalog Management</li></Link>
                                            <Link href="/storefront-management" onClick={handleMenu}><li>Storefront Management</li></Link>
                                            <Link href="/internal-collaboration" onClick={handleMenu}><li>Internal Collaboration</li></Link>
                                            <Link href="/customer-support" onClick={handleMenu}><li>E-Commerce Customer Support</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-bar-ele-company" ref={companyRef}>
                            <div className="company-select" onClick={toggleCompany}>
                                <p>Company</p>
                                <ChevronDown className={`dropdown-arrow ${activeDropdown === 'company' ? 'rotated' : ''}`}/>
                            </div>
                            <div className={`company-div-container ${activeDropdown === 'company' ? 'visible' : ''}`}>
                                <div className="company-wrap">
                                    <Link href="/about" onClick={handleMenu}>
                                    <div className="about-us">
                                        <div className="icon-box">
                                            <Users className="company-icon"/>
                                        </div>
                                        <div className="text-box">
                                            <h3>About Us</h3>
                                            <p>Get to know our mission and team.</p>
                                        </div>
                                    </div>
                                    </Link>
                                    <Link href="/why-us" onClick={handleMenu}>
                                    <div className="why-us">
                                        <div className="icon-box">
                                            <Handshake className="company-icon"/>
                                        </div>
                                        <div className="text-box">
                                            <h3>Why Choose Growmax?</h3>
                                            <p>See what makes us the right choice.</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-bar-ele"><Link href="/integrations" onClick={handleMenu}>Integrations</Link></div>
                        <div className="nav-bar-ele"><Link href="/blog" onClick={handleMenu}>Blog</Link></div>
                    </nav>

                    
                    <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

               
                <div className="button-container desktop-button" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap: "30px"}}>
                    <button className="talk-to-us" onClick={handleButtonMenu}>Talk To Us<PhoneCall /></button>
                    {isAuth && userInfo && (
                        <div className="admin-details-box">
                            <Link href="/admin/dashboard" className="admin-logged-in-pfp">
                                <Image 
                                    src={userInfo.profilephoto || "/images/default-picture.jpg"} 
                                    width={40} 
                                    height={40} 
                                    alt="Admin Profile Photo"
                                />
                            </Link>
                        </div>
                    )}
                </div>

    
                <div className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
                    <div className="mobile-nav-content">
                       
                        <div className="mobile-nav-item">
                            <div className="mobile-nav-header" onClick={() => toggleMobileDropdown('solutions')}>
                                <span>Solutions</span>
                                <ChevronDown className={`mobile-dropdown-arrow ${mobileActiveDropdown.solutions ? 'rotated' : ''}`}/>
                            </div>
                            <div className={`mobile-dropdown ${mobileActiveDropdown.solutions ? 'mobile-dropdown-open' : ''}`}>
                               
                                <div className="mobile-nav-subitem">
                                    <div className="mobile-nav-subheader" onClick={() => toggleMobileDropdown('platform')}>
                                        <span>Platform</span>
                                        <ChevronDown className={`mobile-dropdown-arrow ${mobileActiveDropdown.platform ? 'rotated' : ''}`}/>
                                    </div>
                                    <div className={`mobile-dropdown ${mobileActiveDropdown.platform ? 'mobile-dropdown-open' : ''}`}>
                                        <Link href="/sales-rep-app" onClick={handleMenu}>
                                            <div className="mobile-nav-link">Sales Representative & Self-Service App for Wholesalers and Distributors
                                            </div>
                                        </Link>
                                        <Link href="/b2b-commerce-cloud" onClick={handleMenu}>
                                            <div className="mobile-nav-link">Enterprise Commerce Cloud for Large Organizations
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="mobile-nav-subitem">
                                    <div className="mobile-nav-subheader" onClick={() => toggleMobileDropdown('features')}>
                                        <span>Features</span>
                                        <ChevronDown className={`mobile-dropdown-arrow ${mobileActiveDropdown.features ? 'rotated' : ''}`}/>
                                    </div>
                                    <div className={`mobile-dropdown ${mobileActiveDropdown.features ? 'mobile-dropdown-open' : ''}`}>
                                        <Link href="/quote-management" onClick={handleMenu}><div className="mobile-nav-link">Quotation Management</div></Link>
                                        <Link href="/order-management" onClick={handleMenu}><div className="mobile-nav-link">Order Management
                                            </div></Link>
                                        <Link href="/sales-rep-app" onClick={handleMenu}><div className="mobile-nav-link">Sales Representative Application</div></Link>
                                        <Link href="/product-catalog-management" onClick={handleMenu}><div className="mobile-nav-link">Product Catalog Management</div>
                                        </Link>
                                        <Link href="/storefront-management" onClick={handleMenu}><div className="mobile-nav-link">Storefront Management</div></Link>
                                        <Link href="/internal-collaboration" onClick={handleMenu}><div className="mobile-nav-link">Internal Collaboration</div></Link>
                                        <Link href="/customer-support" onClick={handleMenu}><div className="mobile-nav-link">E-Commerce Customer Support</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="mobile-nav-item">
                            <div className="mobile-nav-header" onClick={() => toggleMobileDropdown('company')}>
                                <span>Company</span>
                                <ChevronDown className={`mobile-dropdown-arrow ${mobileActiveDropdown.company ? 'rotated' : ''}`}/>
                            </div>
                            <div className={`mobile-dropdown ${mobileActiveDropdown.company ? 'mobile-dropdown-open' : ''}`}>
                                <Link href="/about" onClick={handleMenu}><div className="mobile-nav-link">About Us</div></Link>
                                <Link href="/why-us" onClick={handleMenu}><div className="mobile-nav-link">Why Choose Growmax?</div></Link>
                            </div>
                        </div>

                        
                        <div className="mobile-nav-item">
                            <Link href="/integrations" onClick={handleMenu}>
                            <div className="mobile-nav-header">
                                <span>Integrations</span>
                            </div>
                            </Link>
                        </div>
                        <div className="mobile-nav-item">
                            <Link href="/blog" onClick={handleMenu}>
                            <div className="mobile-nav-header">
                                <span>Blog</span>
                            </div>
                            </Link>
                        </div>
                        
                        <div className="mobile-nav-item" style={{display:"flex", flexDirection:"column", gap:"15px", alignItems: "center", justifyContent: "center", padding: "15px 0"}}>
                            <button className="mobile-talk-to-us" onClick={handleButtonMenu}>Talk To Us<PhoneCall /></button>
                            {isAuth && userInfo && (
                                <div className="admin-details-box" style={{display:"flex", flexDirection:"row", gap:"10px", alignItems: "center"}}>
                                    <Link href="/admin/dashboard" className="admin-logged-in-pfp" style={{display:"flex", flexDirection:"row", gap: "10px"}}>
                                        <Image 
                                            src={userInfo.profilephoto || "/images/default-picture.jpg"} 
                                            width={40} 
                                            height={40} 
                                            alt="Admin Profile Photo"
                                        />
                                        <p style={{fontFamily:"Outfit", fontSize:"15px", color: "grey"}}>
                                            {userInfo.email}
                                        </p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header